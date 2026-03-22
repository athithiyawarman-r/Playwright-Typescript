import { test, chromium, firefox, webkit, expect } from "@playwright/test"

test("Learn how to interact with frames", async ({ page }) => {
page.on(`dialog`, async(alert)=>{

    console.log(alert.message())
await alert.accept()

})
await page.goto(`https://www.canarabank.bank.in/pages/net-banking`);

await page.locator(`#netbanking-link`).click();

})