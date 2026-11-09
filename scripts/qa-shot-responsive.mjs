import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("qa-shots", { recursive: true });

const browser = await chromium.launch();
const widths = [375, 900, 1366];

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 1400 } });
  await page.goto("http://localhost:3000/blog/professional-services-admin-bottleneck", { waitUntil: "load" });
  await page.evaluate(() => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")));
  await page.waitForTimeout(150);

  const related = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll("h2")).find((h) => h.textContent.trim() === "From the blog");
    return h2 ? h2.closest("section") : null;
  });
  const el = related.asElement();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);

  const cols = await page.evaluate(() => {
    const grid = document.querySelector(".related-articles-grid");
    return getComputedStyle(grid).gridTemplateColumns.split(" ").length;
  });
  console.log(`width ${width}: ${cols} grid columns`);

  await page.screenshot({ path: `qa-shots/responsive-${width}.png`, fullPage: false });
  await page.close();
}
await browser.close();
