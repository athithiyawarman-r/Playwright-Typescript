import { test, chromium, firefox, webkit, expect } from "@playwright/test"

test("Learn Assertions", async ({ page }) => {

    //Part 1: Navigate to the page
    await page.goto(`https://leafground.com/input.xhtml`);

    //Part 2: Validate a Disabled Textbox
    await expect(page.locator("//h5[text()='Verify if text box is disabled']/following-sibling::div[1]/div/input")).toBeDisabled();

    //Part 3: Validate an Enabled Textbox and Type your name
    await expect(page.locator(`//h5[text()='Type your name']/following-sibling::div[1]/div/input`)).toBeEnabled();
    await page.locator(`//h5[text()='Type your name']/following-sibling::div[1]/div/input`).fill("Athithiyawarman Rajeswaran");
            //Assert that it is editable
    await expect(page.locator(`//h5[text()='Type your name']/following-sibling::div[1]/div/input`)).toBeEditable();

    //Part 4: Soft Assertion Practice
    await expect.soft(page.locator(`//h5[text()='//h5[text()='Append Country to this City.']/following-sibling::div[1]/div/input`)).toBeDisabled();

    //Part 5: Fill Data    
    await expect(page.locator(`//h5[text()='Retrieve the typed text.']/following-sibling::div[1]/div/input`)).toBeEnabled();
    await page.locator(`//h5[text()='Retrieve the typed text.']/following-sibling::div[1]/div/input`).fill("Playwright Learning");




})