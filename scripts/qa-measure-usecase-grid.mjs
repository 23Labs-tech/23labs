import { chromium } from "playwright";

const pages = [
  "http://localhost:3000/solutions/reduce-manual-data-entry",
  "http://localhost:3000/solutions/lead-response-automation",
  "http://localhost:3000/solutions/automate-quoting",
  "http://localhost:3000/services/ongoing-support",
  "http://localhost:3000/services/system-integrations",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 1000 } });

for (const url of pages) {
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(200);

  const result = await page.evaluate(() => {
    const grids = Array.from(document.querySelectorAll(".usecase-grid"));
    return grids.map((grid) => {
      const items = Array.from(grid.querySelectorAll(".usecase-card"));
      const gridRect = grid.getBoundingClientRect();
      const lastRect = items[items.length - 1]?.getBoundingClientRect();
      const heading = grid.closest("section")?.querySelector("h2")?.textContent?.trim();
      return {
        heading,
        isFollow: grid.classList.contains("follow"),
        count: items.length,
        lastItemGridColumn: items.length ? getComputedStyle(items[items.length - 1]).gridColumn : null,
        lastItemFillsToRightEdge: lastRect ? Math.abs(lastRect.right - gridRect.right) < 2 : null,
      };
    });
  });

  console.log(`--- ${url} ---`);
  console.log(JSON.stringify(result, null, 2));
}

await browser.close();
