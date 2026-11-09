import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("qa-shots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 1200 } });

const targets = [
  ["http://localhost:3000/solutions/lead-response-automation", "Where we have done this", "lead-response-automation.png"],
  ["http://localhost:3000/solutions/reduce-manual-data-entry", "Where we have done this", "reduce-manual-data-entry.png"],
  ["http://localhost:3000/services/ongoing-support", "Published work", "ongoing-support.png"],
];

for (const [url, headingText, filename] of targets) {
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  });
  await page.waitForTimeout(100);
  const handle = await page.evaluateHandle((text) => {
    const h = Array.from(document.querySelectorAll("h2")).find((el) => el.textContent.trim() === text);
    return h ? h.closest("section") : null;
  }, headingText);
  const el = handle.asElement();
  if (el) {
    await el.screenshot({ path: `qa-shots/${filename}` });
    console.log(`saved ${filename}`);
  } else {
    console.log(`section not found for ${filename}`);
  }
}
await browser.close();
