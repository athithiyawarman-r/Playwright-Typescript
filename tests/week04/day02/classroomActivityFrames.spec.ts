import { test, chromium, firefox, webkit, expect } from "@playwright/test"

test("Learn how to interact with frames", async ({ page }) => {

await page.goto(`https://leafground.com/frame.xhtml`);
const InsideFrame = page.frameLocator(`[src="default.xhtml"]`);
await InsideFrame.locator(`#Click`).click();
await expect(InsideFrame.locator(`//button[text()='Hurray! You Clicked Me.']`)).toBeVisible();

const allFrames = page.frames()
const count = allFrames.length;
console.log(`Total number of frames available in the page ${count}`)

const outerframe = page.frameLocator(`[src="page.xhtml"]`);
const InsideNestedFrame = outerframe.frameLocator(`[src="framebutton.xhtml"]`);
await InsideNestedFrame.locator(`#Click`).click();
await expect(InsideNestedFrame.locator(`//button[text()='Hurray! You Clicked Me.']`)).toBeVisible();
})