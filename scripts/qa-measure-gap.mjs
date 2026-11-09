import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto("http://localhost:3000/services/business-process-automation", { waitUntil: "load" });
await page.waitForTimeout(300);

const result = await page.evaluate(() => {
  const headings = Array.from(document.querySelectorAll("h2"));
  const target = headings.find((h) => h.textContent?.trim() === "When this is the right service");
  if (!target) return { error: "heading not found" };

  const section = target.closest("section");
  const textBlock = section?.querySelector(".text-block");
  const lastP = textBlock?.querySelector("p:last-child");

  const sectionRect = section.getBoundingClientRect();
  const pRect = lastP.getBoundingClientRect();
  const sectionStyle = getComputedStyle(section);

  return {
    sectionClassName: section.className,
    sectionPaddingTop: sectionStyle.paddingTop,
    sectionPaddingBottom: sectionStyle.paddingBottom,
    sectionTop: sectionRect.top,
    sectionBottom: sectionRect.bottom,
    sectionHeight: sectionRect.height,
    paragraphBottom: pRect.bottom,
    gapBelowParagraph: sectionRect.bottom - pRect.bottom,
  };
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
