// Regression test for next.config.ts's redirects(): confirms each legacy
// URL (1) resolves in exactly one hop (no chains/loops), (2) lands on a
// real 200 page rather than another redirect or a 404, and (3) preserves
// query strings. Run against a `next start` server (redirects don't apply
// under `next build` alone): node scripts/test-redirects.mjs
const BASE = process.env.TEST_BASE_URL ?? "http://localhost:3000";

const redirects = [
  { source: "/services/business-automation", destination: "/services/business-process-automation" },
  { source: "/services/systems-integrations", destination: "/services/system-integrations" },
  { source: "/services/system-integration", destination: "/services/system-integrations" },
  { source: "/services/api-integration", destination: "/services/system-integrations" },
  { source: "/services/full-stack-software-development", destination: "/services/custom-software-development" },
  { source: "/services/web-app-development", destination: "/services/custom-software-development" },
  { source: "/services/ai-automation", destination: "/services/ai-agents" },
  { source: "/case-studies", destination: "/work" },
  { source: "/case-studies/first-national-real-estate", destination: "/case-studies/real-estate-workflow-automation" },
  { source: "/locations/new-zealand", destination: "/new-zealand" },
];

const failures = [];

function check(label, condition, detail) {
  if (condition) {
    console.log(`PASS  ${label}`);
  } else {
    failures.push(label);
    console.error(`FAIL  ${label}`);
    if (detail) console.error(`      ${detail}`);
  }
}

for (const { source, destination } of redirects) {
  const res = await fetch(`${BASE}${source}`, { redirect: "manual" });
  const isRedirect = res.status >= 300 && res.status < 400;
  const location = res.headers.get("location");
  let locationPath = null;
  try {
    locationPath = location ? new URL(location, BASE).pathname : null;
  } catch {
    locationPath = location;
  }

  check(
    `${source} -> single 3xx redirect`,
    isRedirect,
    `got status ${res.status}`,
  );
  check(
    `${source} -> Location header is ${destination}`,
    locationPath === destination,
    `got Location: ${location}`,
  );
  check(
    `${source} -> permanent (301/308), not temporary`,
    res.status === 301 || res.status === 308,
    `got status ${res.status}`,
  );

  // Follow the redirect once and confirm it lands on a real 200 page, not
  // another redirect (which would indicate a chain) or a 404.
  if (isRedirect && locationPath) {
    const followed = await fetch(`${BASE}${locationPath}`, { redirect: "manual" });
    check(
      `${source} -> ${locationPath} resolves to 200 in one hop (no chain)`,
      followed.status === 200,
      `got status ${followed.status}`,
    );
  }
}

// Query-string preservation: redirects() with a plain (non-wildcard)
// source/destination pair appends the incoming query string by default.
const qsCase = { source: "/services/business-automation", destination: "/services/business-process-automation" };
const qsRes = await fetch(`${BASE}${qsCase.source}?utm_source=test&utm_campaign=redirect-check`, {
  redirect: "manual",
});
const qsLocation = qsRes.headers.get("location");
check(
  "query string preserved through redirect",
  qsLocation?.includes("utm_source=test") && qsLocation?.includes("utm_campaign=redirect-check"),
  `got Location: ${qsLocation}`,
);

// Loop guard: confirm none of the canonical destinations are themselves a
// redirect source (which would create a loop or chain with any new rule
// added later that targets them).
const destinations = [...new Set(redirects.map((r) => r.destination))];
for (const destination of destinations) {
  const res = await fetch(`${BASE}${destination}`, { redirect: "manual" });
  check(`${destination} is not itself a redirect source`, res.status === 200, `got status ${res.status}`);
}

console.log(`\n${failures.length ? "FAILED" : "ALL PASS"}: ${failures.length} failure(s)`);
process.exit(failures.length ? 1 : 0);
