// Visual QA screenshot sweep across one representative page per template,
// at mobile/tablet/laptop/desktop widths.
//
// First run (once): npx playwright install chromium
// Usage: npm run build && npm run start, then in another terminal:
//   npm run qa:screenshots [output-dir]   (defaults to ./qa-screenshots)
//
// Every .reveal (scroll-in-view) element is forced visible before capture,
// since a full-page screenshot does not trigger the real IntersectionObserver
// the way scrolling does - without this every section below the first
// viewport renders as an empty, opacity:0 gap.

import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = "http://localhost:3000";
const OUT_DIR = process.argv[2] || "qa-screenshots";

const VIEWPORTS = [
  { label: "mobile", width: 390, height: 844 },
  { label: "tablet", width: 768, height: 1024 },
  { label: "laptop", width: 1366, height: 900 },
  { label: "desktop", width: 1920, height: 1080 },
];

const PAGES = [
  { path: "/", name: "home", viewports: ["mobile", "tablet", "laptop", "desktop"] },
  { path: "/about", name: "about", viewports: ["mobile", "desktop"] },
  { path: "/contact", name: "contact", viewports: ["mobile", "desktop"] },
  { path: "/security", name: "security", viewports: ["mobile", "desktop"] },
  { path: "/privacy-policy", name: "privacy", viewports: ["desktop"] },
  { path: "/industries", name: "industries-hub", viewports: ["mobile", "desktop"] },
  { path: "/construction", name: "industry-detail", viewports: ["mobile", "desktop"] },
  { path: "/services", name: "services-hub", viewports: ["mobile", "desktop"] },
  { path: "/services/business-process-automation", name: "service-detail", viewports: ["mobile", "desktop"] },
  { path: "/work", name: "work-hub", viewports: ["mobile", "desktop"] },
  { path: "/case-studies/huntress-recruitment", name: "case-study-detail", viewports: ["mobile", "desktop"] },
  { path: "/blog", name: "blog-hub", viewports: ["mobile", "desktop"] },
  { path: "/blog/ai-agents-vs-workflow-automation", name: "blog-post", viewports: ["mobile", "desktop"] },
  { path: "/locations", name: "locations-hub", viewports: ["desktop"] },
  { path: "/locations/melbourne", name: "location-detail", viewports: ["mobile", "desktop"] },
  { path: "/new-zealand", name: "new-zealand", viewports: ["mobile", "desktop"] },
  { path: "/solutions", name: "solutions-hub", viewports: ["desktop"] },
  { path: "/solutions/automate-quoting", name: "solution-detail", viewports: ["mobile", "desktop"] },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const results = [];

for (const page of PAGES) {
  for (const vpLabel of page.viewports) {
    const vp = VIEWPORTS.find((v) => v.label === vpLabel);
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const tab = await context.newPage();
    const url = `${BASE}${page.path}`;
    try {
      const resp = await tab.goto(url, { waitUntil: "load", timeout: 30000 });
      await tab.waitForTimeout(300);
      // Force every scroll-reveal element visible before capturing, since a
      // full-page screenshot doesn't naturally trigger the IntersectionObserver
      // for sections below the fold the way real scrolling does.
      await tab.evaluate(() => {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      });
      await tab.waitForTimeout(700);
      const file = path.join(OUT_DIR, `${page.name}__${vpLabel}.png`);
      await tab.screenshot({ path: file, fullPage: true });
      results.push({ url, viewport: vpLabel, status: resp?.status(), file });
    } catch (err) {
      results.push({ url, viewport: vpLabel, error: String(err) });
    } finally {
      await context.close();
    }
  }
}

await browser.close();

for (const r of results) {
  if (r.error) {
    console.log(`FAIL ${r.url} [${r.viewport}] ${r.error}`);
  } else {
    console.log(`OK   ${r.url} [${r.viewport}] ${r.status} -> ${r.file}`);
  }
}
