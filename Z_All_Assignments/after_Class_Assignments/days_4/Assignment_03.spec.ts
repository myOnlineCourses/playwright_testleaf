
/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/

import {test, chromium} from '@playwright/test';

test('Create Individuals', async() => {

   const browser = await chromium.launch({headless:false})
   const browserContext = await browser.newContext();
   const page = await browserContext.newPage();

   await page.goto("https://login.salesforce.com");
   await page.locator("#username").fill("herrafiisdet@gmail.com")
   await page.locator("#password").fill("Foumal3ancer@");
   await page.locator("#Login").click();

   await page.waitForTimeout(5000);





})

