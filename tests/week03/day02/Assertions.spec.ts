import { test, chromium, firefox, webkit, expect } from "@playwright/test"

test("Learn Assertions", async ({ page }) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await expect(page.locator(`//input[@id="username"]`)).toBeEditable(); // check whether the field is editable

    //page.locator(`//input[@id="username"]') => locator object on which the validation has to be done

    await page.locator(`//input[@id="username"]`).fill("demosalesmanager");

    await expect(page.locator(`//input[@id="password"]`)).toBeEmpty() // check whether the field is empty before you enter value

    await page.locator(`//input[@id="password"]`).fill("crmsfa");

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains (text(), "CRM")]`).click();

    await page.locator(`//a[text()="Leads"]`).click();


    await page.locator(`//a[text()="Create Lead"]`).click();


    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Testleaf");


    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Ravindran");


    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");


    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`, { value: "LEAD_DIRECTMAIL" }) // Method 1 : Using value


    const alldropdownValues = page.locator((`//select[@id="createLeadForm_dataSourceId"]/option`)); //13 webelements


    const dropDownCount = await alldropdownValues.count(); // Number of webeelement present in the dropdown


    for (let index = 0; index < dropDownCount; index++) {
        console.log(await alldropdownValues.nth(index).innerText());
    }

    await page.waitForTimeout(3000)// Note: Only for demo purpose
await page.locator(`//input[@name="submitButton"]`).click();
await page.waitForTimeout(3000)// Note Only for demo purpose
await expect(page.locator (`#viewLead_statusId_sp`)).toContainText("Assigned");

})