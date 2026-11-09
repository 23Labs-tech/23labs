import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("qa-shots", { recursive: true });

const browser = await chromium.launch();
const widths = [375, 900, 1366];

const targets = [
  { url: "http://localhost:3000/blog/professional-services-admin-bottleneck", heading: "From the blog", label: "blog" },
  { url: "http://localhost:3000/case-studies/huntress-recruitment", heading: "More success stories", label: "huntress" },
];

for (const { url, heading, label } of targets) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 1400 } });
    await page.goto(url, { waitUntil: "load" });
    await page.evaluate(() => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")));
    await page.waitForTimeout(150);

    const related = await page.evaluateHandle((text) => {
      const h2 = Array.from(document.querySelectorAll("h2")).find((h) => h.textContent.trim() === text);
      return h2 ? h2.closest("section") : null;
    }, heading);
    const el = related.asElement();
    if (!el) {
      console.log(`${label} width ${width}: related section NOT FOUND`);
      await page.close();
      continue;
    }
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);

    const cols = await page.evaluate(() => {
      const grid = document.querySelector(".related-content-grid");
      return grid ? getComputedStyle(grid).gridTemplateColumns.split(" ").length : null;
    });
    console.log(`${label} width ${width}: ${cols} grid columns`);

    await page.screenshot({ path: `qa-shots/${label}-responsive-${width}.png` });
    await page.close();
  }
}
await browser.close();
