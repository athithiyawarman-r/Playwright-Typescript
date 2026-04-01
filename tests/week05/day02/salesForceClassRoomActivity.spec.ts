import {test, chromium, firefox, webkit,expect} from "@playwright/test"
import credentials from "../../../Data/SalesforceCredentials.json"

for(let loginData of credentials){
test(`Data Parameterization sales force ${loginData.TCaseID}`, async({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

await page.locator(`//input[@id='username']`).fill(loginData.Email);
await page.locator(`//input[@name='pw']`).fill(loginData.Password);
await page.locator (`input[type='submit']`).click();

console.log(`Username: ${loginData.Email}`)

await page.waitForTimeout(3000)
})}

