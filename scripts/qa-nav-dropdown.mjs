import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "load" });

async function testDropdown(label) {
  const trigger = page.locator(".nav-menu-trigger", { hasText: label });
  const box = await trigger.boundingBox();
  if (!box) throw new Error(`${label}: trigger not found`);

  // Move onto the trigger first (realistic hover start).
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(150);

  const panel = page.locator(".nav-item-has-menu.is-open .nav-mega-panel");
  const openedAfterHover = await panel.isVisible().catch(() => false);

  // Now move in several small steps from the trigger down into the panel,
  // simulating a real diagonal mouse path through the gap.
  const panelBox = await page.locator(".nav-item-has-menu.is-open .nav-mega").boundingBox();
  if (!panelBox) throw new Error(`${label}: dropdown did not open on hover`);

  const steps = 8;
  for (let i = 1; i <= steps; i++) {
    const x = box.x + box.width / 2 + ((panelBox.x + panelBox.width / 2) - (box.x + box.width / 2)) * (i / steps);
    const y = box.y + box.height / 2 + ((panelBox.y + panelBox.height / 2) - (box.y + box.height / 2)) * (i / steps);
    await page.mouse.move(x, y);
    await page.waitForTimeout(40);
  }

  const stillOpenMidway = await panel.isVisible().catch(() => false);

  // Move fully onto a link inside the panel and check it's clickable.
  const firstLink = page.locator(".nav-item-has-menu.is-open .nav-mega-grid a").first();
  const linkBox = await firstLink.boundingBox();
  let overLink = false;
  if (linkBox) {
    await page.mouse.move(linkBox.x + linkBox.width / 2, linkBox.y + linkBox.height / 2);
    await page.waitForTimeout(150);
    overLink = await panel.isVisible().catch(() => false);
  }

  console.log(`${label}: openedAfterHover=${openedAfterHover} stillOpenDuringTransit=${stillOpenMidway} openWhenOverLink=${overLink}`);

  // Move away and confirm it closes.
  await page.mouse.move(10, 10);
  await page.waitForTimeout(400);
  const closedAfterLeaving = !(await panel.isVisible().catch(() => false));
  console.log(`${label}: closedAfterMovingAway=${closedAfterLeaving}`);
}

await testDropdown("Services");
await testDropdown("Industries");

await browser.close();
