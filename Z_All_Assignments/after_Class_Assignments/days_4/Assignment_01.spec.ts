/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
//******************/

import { test, expect, chromium } from '@playwright/test'
test('test Assignment 1 Create Lead', async () => {
  test.setTimeout(50000);

  const browser = await chromium.launch({ headless: false });
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();

  await page.goto("https://login.salesforce.com");
  await page.locator("input[id='username']").fill("herrafiisdet@gmail.com");
  await page.locator("[id=password]").fill("Foumal3ancer@");
  page.locator("[id=Login]").click();

  await page.locator("div[class=slds-icon-waffle]").click();
  await page.locator("button[part=button]").click();
  await page.locator("//p[text()='Sales']").click();
  await page.locator("(//span[text()='Leads'])[1]").click();
  await page.locator("//button[text()='New']").click();

  await page.locator("button[name='salutation']").click();
  await page.getByText("Mr.").click();
  await page.locator("input[name='lastName']").fill("Erra");
  await page.locator("input[name='Company']").fill("CompanyXXX");

  await page.locator("button[name='SaveEdit']").click();
  await page.waitForTimeout(5000)
  //Verification   
  const verifylead = await page.locator("span[class='toastMessage slds-text-heading--small forceActionsText']").isVisible()
  if (verifylead == true) {
    console.log("******** The leads created successfully ******** ")
  } else {
    console.log("Failed to create a lead")
  }

})
