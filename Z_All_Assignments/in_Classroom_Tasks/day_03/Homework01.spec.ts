
/* Create a new browser instance
* Create a new browser context
* Create a new page
* Load the url https://login.salesforce.com/
* Print the url
* Enter the username vidyar@testleaf.com
* Enter the password Testleaf@1234
* Click Login button
* Verify the title of the page (using page.title() method)
*
*/// Try Implementing Fixtures in the above testcase 

import { test, chromium } from "@playwright/test";
test('Login to Salesforce', async () => {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    console.log(page.url());
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.fill("#password", "Testleaf@1234");
    page.locator("#Login").click;
    const pageTitle = await page.title()
    console.log(pageTitle)

})