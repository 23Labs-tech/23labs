import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("qa-shots", { recursive: true });

const posts = [
  "professional-services-admin-bottleneck",
  "zapier-vs-custom-integration",
  "how-much-does-custom-software-cost-australia",
];

const browser = await chromium.launch();

for (const slug of posts) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 1400 } });
  await page.goto(`http://localhost:3000/blog/${slug}`, { waitUntil: "load" });
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  });
  await page.waitForTimeout(100);

  await page.screenshot({ path: `qa-shots/${slug}-header.png`, clip: { x: 0, y: 0, width: 1366, height: 1000 } });

  const relatedSection = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll("h2")).find((h) => h.textContent.trim() === "From the blog");
    return h2 ? h2.closest("section") : null;
  });
  const el = relatedSection.asElement();
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);
    await el.screenshot({ path: `qa-shots/${slug}-related.png` });
  }

  // Data check: related posts never include the current post, matches section/category logic.
  const check = await page.evaluate((currentSlug) => {
    const links = Array.from(document.querySelectorAll(".home-blog-cell"));
    const hrefs = links.map((a) => a.getAttribute("href"));
    return { count: hrefs.length, hrefs, includesSelf: hrefs.includes(`/blog/${currentSlug}`) };
  }, slug);
  console.log(`${slug}:`, JSON.stringify(check));

  await page.close();
}

await browser.close();
