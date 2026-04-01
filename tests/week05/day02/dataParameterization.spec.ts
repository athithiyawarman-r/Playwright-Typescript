import {test, chromium, firefox, webkit,expect} from "@playwright/test"
import credentials from "../../../Data/Login.json"
import credentials2 from "../../../Data/Credentials.json"


test("Data Param", async({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');


    await page.locator(`//input[@id="username"]`).fill(credentials.Username);


    await page.locator(`//input[@id="password"]`).fill(credentials.Password);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();


    await page.locator(`//a[contains(text(),"CRM")]`).click();

})


test.describe.serial('Serialisation', async ()=> {
for(let data of credentials2){
test(`Data Param - Iteration ${data.TCaseID}`, async({page}) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill(data.Username);


    await page.locator(`//input[@id="password"]`).fill(data.Password);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();


    await page.locator(`//a[contains(text(),"CRM")]`).click();

})
}
})
