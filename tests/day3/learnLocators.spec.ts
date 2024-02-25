import { test, chromium } from "@playwright/test";
test('Learn Locators using CSS', async ({ page }) => {
    // in line 3 becuase we used fixture {page} we dont need lines 5 to 11
    //promise keyword as u mouse over on async then it will need await for all promise
   
    // 1- creating browser reference 
    //const browser = await chromium.launch({headless:false,channel:"chrome"});
    
    // 2- Launch the incognito browser context 
    // const browserContext = await browser.newContext();
    
    // 3- Launch a tab within the page 
    //const page = await browserContext.newPage();
   
    //await page.waitForTimeout(3000);
   
    //loading the url 
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //using css selector to select the element
    await page.locator(`#username`).fill("demosalesManager")
    //2nd way to handle the element with action 
    await page.fill("#password", "crmsfa")
    // click the element 
   await page.click(".decorativeSubmit")
    console.log(page.url());
   await page.waitForTimeout(3000)
})