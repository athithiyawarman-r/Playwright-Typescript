import {test, chromium, firefox, webkit} from "@playwright/test"

test("Test to launch a chrome browser", async() => {

const browser = await chromium.launch({channel:"msedge",headless:false}) //channels - chrome, msedge, (you cant do firefox)
const context = await browser.newContext()
const page = await context.newPage()

await page.goto("https://platform.testleaf.com/#/")
console.log(await page.url());

  console.log('Page Title:', await page.title());

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