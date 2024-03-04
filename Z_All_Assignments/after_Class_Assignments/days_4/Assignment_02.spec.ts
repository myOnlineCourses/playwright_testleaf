
/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username   demosalesManager   input[id=username]
3. Enter the password    crmsfa
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import {test, chromium} from '@playwright/test'
test ('Edit Lead', async() => {
 const browser = await chromium.launch({headless: false, slowMo:50});
const browserContext = await browser.newContext()
const page = await browserContext.newPage()

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("input[id=username]").fill("demosalesManager");
await page.locator("input[id=password]").fill("crmsfa");
await page.locator("input[class=decorativeSubmit]").click();

await page.locator("//a[contains(text(),'CRM/SFA')]").click();

await page.locator("//a[contains(text(), 'Leads')]").click()
await page.locator("//a[contains(text(), 'Create Lead')]").click()

await page.locator("#createLeadForm_companyName").fill("Amazon");
await page.locator("#createLeadForm_firstName").fill("Hassa");
await page.locator("#createLeadForm_lastName").fill(("Erra"));

await page.locator("[class=smallSubmit]").click();
await page.waitForTimeout(30000);
await page.locator("//a[contains(text(), 'Edit')]").click();
await page.waitForTimeout(30000);
await page.locator("#updateLeadForm_companyName").fill("company333");
await page.locator("#ext-gen614").click();
await page.waitForTimeout(30000);








})