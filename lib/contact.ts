export type ContactPayload = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
  startedAt?: number;
};

export type ContactErrors = Partial<Record<keyof ContactPayload | "form", string>>;

export type ContactValidationResult =
  | { ok: true; data: ContactPayload; spam: boolean }
  | { ok: false; errors: ContactErrors; spam: boolean };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

export function validateContactPayload(input: unknown): ContactValidationResult {
  const source = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const fullName = clean(source.fullName, 120);
  const company = clean(source.company, 120);
  const email = clean(source.email, 160).toLowerCase();
  const phone = clean(source.phone, 60);
  const message = clean(source.message, 2000);
  const website = clean(source.website, 200);
  const rawStartedAt = source.startedAt;
  const startedAt =
    typeof rawStartedAt === "number"
      ? rawStartedAt
      : typeof rawStartedAt === "string"
        ? Number(rawStartedAt)
        : undefined;

  const errors: ContactErrors = {};

  if (!fullName) errors.fullName = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please tell us how we can help.";
  else if (message.length < 20) errors.message = "Please share a little more detail.";

  const spam = website.length > 0;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, spam };
  }

  return {
    ok: true,
    spam,
    data: {
      fullName,
      company,
      email,
      phone,
      message,
      website,
      startedAt: Number.isFinite(startedAt) ? startedAt : undefined,
    },
  };
}

