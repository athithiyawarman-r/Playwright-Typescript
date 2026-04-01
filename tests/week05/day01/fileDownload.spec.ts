import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import path from 'path'

test(`Learn to handle file download`, async ({page, context}) => {
await page.goto('https://leafground.com/file.xhtml');

const filePromise = page.waitForEvent("download") // listerner captures the file that got downladed
await page.locator('//span[text()="Download"]').click(); // click action
const fDown = await filePromise // resolving the download action after completion of waitForEvent I

//Relative Path
await fDown.saveAs(`data/Feb28.png`)
await fDown.saveAs(`data/${fDown.suggestedFilename()}`)

//Absolute Path
await fDown.saveAs(path.join(__dirname,`../../../Data/Absolute.png`))

await page.waitForTimeout(3000)
})