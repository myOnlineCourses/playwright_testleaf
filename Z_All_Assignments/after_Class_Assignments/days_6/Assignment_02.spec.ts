import { expect, test } from "@playwright/test";


test(`TC_002 Test wait`, async ({page}) => {
await page.goto("https://leafground.com/waits.html");

const cardToSelect = page.locator("card").filter({hasText:"Wait for Invisibility"});
const ellementToClick = cardToSelect.locator("ui-button-text ui-c").filter({hasText:"Click"});
ellementToClick.click();

const hiddenButton = cardToSelect.locator("ui-button-text ui-c").filter({hasText:"I am about to hide"});
await expect(hiddenButton).toBeHidden({timeout:15000});
await page.waitForTimeout(3000);
})