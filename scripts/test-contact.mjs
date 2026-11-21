// Focused tests for lib/contact.ts's validateContactPayload, the server-side
// gate the /api/contact route relies on for required fields, email format,
// service-slug validity and the honeypot spam flag. Same proportionate
// approach as scripts/test-lib-utils.mjs / scripts/test-calculator.mjs - no
// new testing stack.
// Run with: node --experimental-strip-types scripts/test-contact.mjs
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./scripts/at-alias-loader.mjs"));

const failures = [];

function check(label, fn) {
  try {
    fn();
    console.log(`PASS  ${label}`);
  } catch (err) {
    failures.push(label);
    console.error(`FAIL  ${label}`);
    console.error(`      ${err.message}`);
  }
}

const { validateContactPayload, isValidServiceSlug, CONTACT_SERVICE_OPTIONS } = await import(
  "@/lib/contact.ts"
);

const validPayload = {
  fullName: "Jane Smith",
  business: "Acme Co",
  email: "jane@acme.com.au",
  service: "business-process-automation",
  message: "We spend hours every week copying job details between two systems by hand.",
};

check("validateContactPayload: a complete, valid payload passes", () => {
  const result = validateContactPayload(validPayload);
  if (!result.ok) throw new Error(`expected ok, got errors: ${JSON.stringify(result.errors)}`);
  if (result.spam) throw new Error("expected spam=false for a normal submission");
});

check("validateContactPayload: missing name is rejected", () => {
  const result = validateContactPayload({ ...validPayload, fullName: "" });
  if (result.ok || !result.errors.fullName) throw new Error("expected a fullName error");
});

check("validateContactPayload: missing business name is rejected", () => {
  const result = validateContactPayload({ ...validPayload, business: "" });
  if (result.ok || !result.errors.business) throw new Error("expected a business error");
});

check("validateContactPayload: invalid email format is rejected", () => {
  const result = validateContactPayload({ ...validPayload, email: "not-an-email" });
  if (result.ok || !result.errors.email) throw new Error("expected an email error");
});

check("validateContactPayload: missing service is rejected", () => {
  const result = validateContactPayload({ ...validPayload, service: "" });
  if (result.ok || !result.errors.service) throw new Error("expected a service error");
});

check("validateContactPayload: an unknown service slug is rejected", () => {
  const result = validateContactPayload({ ...validPayload, service: "not-a-real-service" });
  if (result.ok || !result.errors.service) throw new Error("expected a service error for an unknown slug");
});

check("validateContactPayload: 'other' is accepted as a valid service option", () => {
  const result = validateContactPayload({ ...validPayload, service: "other" });
  if (!result.ok) throw new Error(`expected ok, got errors: ${JSON.stringify(result.errors)}`);
});

check("validateContactPayload: a too-short message is rejected", () => {
  const result = validateContactPayload({ ...validPayload, message: "Help" });
  if (result.ok || !result.errors.message) throw new Error("expected a message error");
});

check("validateContactPayload: a filled honeypot field marks the submission as spam", () => {
  const result = validateContactPayload({ ...validPayload, website: "http://spam.example" });
  if (!result.spam) throw new Error("expected spam=true when the honeypot field is filled");
});

check("isValidServiceSlug: every canonical service slug validates", () => {
  for (const option of CONTACT_SERVICE_OPTIONS) {
    if (!isValidServiceSlug(option.slug)) throw new Error(`expected ${option.slug} to be valid`);
  }
});

check("CONTACT_SERVICE_OPTIONS: includes all six canonical services plus 'other'", () => {
  if (CONTACT_SERVICE_OPTIONS.length !== 7) {
    throw new Error(`expected 7 options, got ${CONTACT_SERVICE_OPTIONS.length}`);
  }
  if (!CONTACT_SERVICE_OPTIONS.some((option) => option.slug === "other")) {
    throw new Error("expected an 'other' fallback option");
  }
});

console.log(`\n${failures.length ? "FAILED" : "ALL PASS"}: ${failures.length} failure(s)`);
process.exit(failures.length ? 1 : 0);
