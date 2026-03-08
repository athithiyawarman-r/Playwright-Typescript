import {test, chromium, firefox, webkit,expect} from "@playwright/test"

test("Test to launch a chrome browser", async() => {

const browser = await chromium.launch({channel:"msedge",headless:false}) //channels - chrome, msedge, (you cant do firefox)
const context = await browser.newContext()
const page = await context.newPage()

await page.goto("http://leaftaps.com/opentaps/control/main")
console.log(page.url());

  console.log('Page Title:', await page.title());

await page.inputValue("input[id='username']")

await page.locator(`[id="username"]`).fill("democsr2");
await page.locator(`#password`).fill("crmsfa");
await page.locator (`.decorativeSubmit`).click();
await expect(page.locator("[for='crmsfa']")).toBeVisible();

await page.waitForTimeout(3000)
})

// test("Test to launch a firefox browser", async() => {

// const browser = await firefox.launch()
// const context = await browser.newContext()
// const page = await context.newPage()

// await page.goto("http://www.amazon.in")
// await page.waitForTimeout(3000)
// })

// test("Test to launch a edge browser", async() => {

// const browser = await webkit.launch()
// const context = await browser.newContext()
// const page = await context.newPage()

// await page.goto("http://www.amazon.in")
// await page.waitForTimeout(3000)
// })