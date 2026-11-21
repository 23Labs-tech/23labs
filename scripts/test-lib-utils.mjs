// Focused smoke tests for lib/seo.ts and lib/analytics.ts, run directly
// against the source (via Node's --experimental-strip-types + a tiny @/
// resolver matching tsconfig's path alias) rather than through a full test
// framework - proportionate to what Part 1 needs, no new testing stack.
// Run with: node --experimental-strip-types scripts/test-lib-utils.mjs
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

const seo = await import("@/lib/seo.ts");
const analytics = await import("@/lib/analytics.ts");

check("createMetadata: default page has no robots override", () => {
  const meta = seo.createMetadata({ title: "Test Page", path: "/test" });
  if (meta.robots !== undefined) throw new Error(`expected undefined, got ${JSON.stringify(meta.robots)}`);
});

check("createMetadata: noindex:true sets robots.index=false, follow=false", () => {
  const meta = seo.createMetadata({ title: "Draft Page", path: "/draft-test", noindex: true });
  if (meta.robots?.index !== false || meta.robots?.follow !== false) {
    throw new Error(`expected {index:false,follow:false}, got ${JSON.stringify(meta.robots)}`);
  }
});

check("createMetadata: canonical URL is built from path", () => {
  const meta = seo.createMetadata({ title: "Test", path: "/foo/bar" });
  if (meta.alternates?.canonical !== "https://www.23labs.co/foo/bar") {
    throw new Error(`unexpected canonical: ${meta.alternates?.canonical}`);
  }
});

check("trackEvent: no-ops without throwing when window is undefined (SSR)", () => {
  analytics.trackEvent("test_event", { foo: "bar" });
});

for (const fn of ["trackCtaClick", "trackFormStart", "trackLeadSubmit", "trackBookingComplete", "trackCaseStudyClick"]) {
  check(`analytics.${fn}: exists and no-ops without throwing (SSR)`, () => {
    if (typeof analytics[fn] !== "function") throw new Error("not exported as a function");
    analytics[fn]("test-id");
  });
}

console.log(`\n${failures.length ? "FAILED" : "ALL PASS"}: ${failures.length} failure(s)`);
process.exit(failures.length ? 1 : 0);
