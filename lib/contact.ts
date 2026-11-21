import { serviceLandingPages } from "@/lib/services";

export const CONTACT_SERVICE_OPTIONS = [
  ...serviceLandingPages.map((service) => ({ slug: service.slug, label: service.navLabel })),
  { slug: "other", label: "Not sure / something else" },
];

const VALID_SERVICE_SLUGS = new Set(CONTACT_SERVICE_OPTIONS.map((option) => option.slug));

export function isValidServiceSlug(slug: string): boolean {
  return VALID_SERVICE_SLUGS.has(slug);
}

export type ContactPayload = {
  fullName: string;
  business: string;
  email: string;
  service: string;
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
  const business = clean(source.business, 120);
  const email = clean(source.email, 160).toLowerCase();
  const service = clean(source.service, 60);
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
  if (!business) errors.business = "Please enter your business name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!service) errors.service = "Please choose the service you are enquiring about.";
  else if (!isValidServiceSlug(service)) errors.service = "Please choose a valid option from the list.";
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
      business,
      email,
      service,
      message,
      website,
      startedAt: Number.isFinite(startedAt) ? startedAt : undefined,
    },
  };
}

