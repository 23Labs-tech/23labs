import { chromium } from "playwright";

const widths = [375, 768, 1366, 1440];
const browser = await chromium.launch();

for (const width of widths) {
const page = await browser.newPage({ viewport: { width, height: 1000 } });
await page.goto("http://localhost:3000/services/business-process-automation", { waitUntil: "load" });
await page.waitForTimeout(300);

const result = await page.evaluate(() => {
  const headings = Array.from(document.querySelectorAll("h2"));
  const target = headings.find((h) => h.textContent?.trim() === "When this is the right service");
  const thisSection = target.closest("section");
  const prevSection = thisSection.previousElementSibling;

  const thisStyle = getComputedStyle(thisSection);
  const thisAfter = getComputedStyle(thisSection, "::after");
  const prevStyle = prevSection ? getComputedStyle(prevSection) : null;
  const prevAfter = prevSection ? getComputedStyle(prevSection, "::after") : null;

  const thisRect = thisSection.getBoundingClientRect();
  const headingRect = target.getBoundingClientRect();
  const prevRect = prevSection ? prevSection.getBoundingClientRect() : null;

  // Find the last visible content element in the previous section to measure
  // the actual gap from content to the divider line.
  const prevContentEls = prevSection ? Array.from(prevSection.querySelectorAll("*")).filter(
    (el) => el.children.length === 0 && el.textContent.trim().length > 0
  ) : [];
  const lastPrevContent = prevContentEls[prevContentEls.length - 1];
  const lastPrevContentRect = lastPrevContent ? lastPrevContent.getBoundingClientRect() : null;

  return {
    prevSectionClass: prevSection?.className,
    prevSectionPaddingBottom: prevStyle?.paddingBottom,
    prevAfterDisplay: prevAfter?.display,
    prevAfterBorderBottom: prevAfter?.borderBottom,
    prevAfterWidth: prevAfter?.width,
    prevSectionBottom: prevRect?.bottom,
    gapFromLastPrevContentToDividerLine: prevRect ? prevRect.bottom - (lastPrevContentRect?.bottom ?? 0) : null,

    thisSectionClass: thisSection.className,
    thisSectionPaddingTop: thisStyle.paddingTop,
    thisAfterDisplay: thisAfter.display,
    thisSectionTop: thisRect.top,
    gapFromDividerLineToHeading: headingRect.top - (prevRect?.bottom ?? 0),
  };
});

console.log(`--- width ${width} ---`);
console.log(JSON.stringify(result, null, 2));
await page.close();
}

await browser.close();
