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

function emailSubject(payload: ContactPayload) {
  return `New 23Labs enquiry — ${payload.company || payload.fullName}`;
}

function submittedAt() {
  return new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function plainText(payload: ContactPayload) {
  return [
    "New website enquiry",
    "",
    "Name:",
    payload.fullName,
    "",
    "Company:",
    payload.company || "Not provided",
    "",
    "Email:",
    payload.email,
    "",
    "Phone:",
    payload.phone || "Not provided",
    "",
    "What they are trying to improve:",
    payload.message,
    "",
    "Submitted:",
    submittedAt(),
    "",
    "Source:",
    "23labs.co/contact",
  ].join("\n");
}

function html(payload: ContactPayload) {
  const rows = [
    ["Name", payload.fullName],
    ["Company", payload.company || "Not provided"],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Submitted", submittedAt()],
    ["Source", "23labs.co/contact"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#161410">
      <h1 style="font-size:20px">New website enquiry</h1>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <h2 style="font-size:16px">What they are trying to improve</h2>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

const FALLBACK_FROM = "23Labs <onboarding@resend.dev>";

async function callResend(apiKey: string, from: string, to: string, payload: ContactPayload) {
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: emailSubject(payload),
        text: plainText(payload),
        html: html(payload),
      }),
    });
  } catch (networkError) {
    return {
      ok: false as const,
      status: 0,
      body: networkError instanceof Error ? networkError.message : "network error calling Resend",
    };
  }

  if (!response.ok) {
    const body = await response.text().catch(() => "<no response body>");
    return { ok: false as const, status: response.status, body };
  }

  const json = (await response.json().catch(() => ({}))) as { id?: string };
  return { ok: true as const, providerId: json.id };
}

type SendEmailResult =
  | { delivered: true; providerId?: string }
  | { delivered: false; reason: string };

async function sendEmail(payload: ContactPayload): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || FALLBACK_FROM;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact-form] Email skipped locally: RESEND_API_KEY is not set.");
      return { delivered: true };
    }
    console.error("[contact-form] RESEND_API_KEY is not set in this environment (Production).");
    return { delivered: false, reason: "RESEND_API_KEY is not configured" };
  }

  const attempt = await callResend(apiKey, from, to, payload);
  if (attempt.ok) return { delivered: true, providerId: attempt.providerId };

  console.error(
    `[contact-form] Resend rejected the send from "${from}" to "${to}" ` +
      `(status ${attempt.status}): ${attempt.body}`
  );

  // A rejection on the primary sender is very often a sender-domain
  // verification issue (the custom domain in CONTACT_FROM_EMAIL isn't
  // verified in Resend). Retry once from Resend's own pre-verified address
  // so the enquiry still gets delivered rather than silently failing.
  if (from !== FALLBACK_FROM) {
    const retry = await callResend(apiKey, FALLBACK_FROM, to, payload);
    if (retry.ok) {
      console.warn(
        `[contact-form] Sent via fallback sender "${FALLBACK_FROM}" after the primary sender was rejected. ` +
          "Verify the CONTACT_FROM_EMAIL domain in Resend to send from the custom address again."
      );
      return { delivered: true, providerId: retry.providerId };
    }
    console.error(
      `[contact-form] Fallback send from "${FALLBACK_FROM}" to "${to}" also failed ` +
        `(status ${retry.status}): ${retry.body}. ` +
        "If this is a 403 on an unverified Resend account, onboarding@resend.dev can only deliver to the " +
        "Resend account's own registered email — that restriction, not a code bug, is the likely cause."
    );
  }

  return { delivered: false, reason: `Resend status ${attempt.status}: ${attempt.body}` };
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

  const result = await sendEmail(validation.data);

  if (result.delivered) {
    if (result.providerId) {
      console.info(`[contact-form] Delivered (Resend id ${result.providerId}) from ip ${ip}.`);
    }
    return NextResponse.json({ ok: true });
  }

  // Email delivery failed. The enquiry must not simply disappear: log the
  // full lead here so it can be recovered from Vercel's function logs
  // (Project -> Logs, filter for "LEAD CAPTURE") until this project has a
  // database to persist it to directly. Never log secrets (API keys etc).
  console.error(
    "[contact-form] LEAD CAPTURE (email delivery failed, reason: " +
      `${result.reason}) ` +
      JSON.stringify({
        name: validation.data.fullName,
        company: validation.data.company || null,
        email: validation.data.email,
        phone: validation.data.phone || null,
        message: validation.data.message,
        submittedAt: new Date().toISOString(),
        ip,
      })
  );

  return NextResponse.json(
    { error: `We could not send your enquiry. Please email ${siteConfig.email} directly.` },
    { status: 500 }
  );
}
