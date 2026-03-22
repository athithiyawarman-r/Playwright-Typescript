import { test, chromium, firefox, webkit, expect } from "@playwright/test"
import { listeners } from "node:cluster";

test("Learn to handle Alerts", async ({ page }) => {


await page.goto(`https://leafground.com/alert.xhtml`);

page.on(`dialog`, async(alert)=>{
    const alertType = alert.type();
    if (alertType==="confirm") {
await alert.accept()
}else if (alertType==="prompt") {
await alert.accept("Athithiyawarman")
} 
else {
await alert.dismiss()
}
})//Listeners

//simple alerts    - Non-Modal Alert
await page.locator(`//h5[text()=' Alert (Simple Dialog)']/following-sibling::button`).click();


//Confirmation alerts    - Non-Modal Alert
await page.locator(`//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button`).click();

//Prompt alerts    - Non-Modal Alert
await page.locator(`//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button`).click();
})


