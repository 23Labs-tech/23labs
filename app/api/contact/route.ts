import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/contact";
import { getBaseUrl, siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 16 * 1024;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  if (rateLimit.size > 1000) {
    for (const [key, bucket] of rateLimit) {
      if (bucket.resetAt < now) rateLimit.delete(key);
    }
  }

  const bucket = rateLimit.get(ip);

  if (!bucket || bucket.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (bucket.count >= MAX_REQUESTS) return false;
  bucket.count += 1;
  return true;
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const allowedOrigins = new Set([new URL(getBaseUrl()).origin, request.nextUrl.origin]);
    const originUrl = new URL(origin);

    if (
      process.env.NODE_ENV !== "production" &&
      ["localhost", "127.0.0.1", "::1"].includes(originUrl.hostname)
    ) {
      return true;
    }

    return allowedOrigins.has(originUrl.origin);
  } catch {
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function plainText(payload: ContactPayload) {
  return [
    `Name: ${payload.fullName}`,
    `Company: ${payload.company || "Not provided"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function html(payload: ContactPayload) {
  const rows = [
    ["Name", payload.fullName],
    ["Company", payload.company || "Not provided"],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#161410">
      <h1 style="font-size:20px">New 23Labs enquiry</h1>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <h2 style="font-size:16px">Message</h2>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

async function sendEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || "23Labs <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Contact form email skipped because RESEND_API_KEY is not set.");
      return;
    }
    throw new Error("Contact email service is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `New 23Labs enquiry from ${payload.fullName}`,
      text: plainText(payload),
      html: html(payload),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend rejected the email request.");
  }
}

async function getRequestBody(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    return Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        typeof value === "string" ? value : "",
      ])
    );
  }

  return request.json();
}

export async function POST(request: NextRequest) {
  if (request.headers.get("sec-fetch-site") === "cross-site" || !isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Cross-site submissions are not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request body is too large." }, { status: 413 });
  }

  const ip = getIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many contact attempts. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await getRequestBody(request);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validation = validateContactPayload(body);

  if (validation.spam) {
    return NextResponse.json({ ok: true });
  }

  if (!validation.ok) {
    return NextResponse.json({ errors: validation.errors }, { status: 422 });
  }

  const startedAt = validation.data.startedAt;
  if (startedAt && Date.now() - startedAt < 2000) {
    return NextResponse.json(
      { errors: { form: "Please wait a moment before submitting the form." } },
      { status: 422 }
    );
  }

  try {
    await sendEmail(validation.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
    return NextResponse.json(
      { error: `We could not send your enquiry. Please email ${siteConfig.email} directly.` },
      { status: 500 }
    );
  }
}
