import { test, chromium } from "@playwright/test";

test('Launching the browser',async()=>{
    //promise keyword as u mouse over on async then it will need await for all promise
    
   //creating browser reference 
   const browser = await chromium.launch({headless:false,channel:"chrome"});

   //Launch the incognito browser context 
   const browserContext = await browser.newContext();

   // Launch a tab within the page 
   const page = await browserContext.newPage();
   await page.waitForTimeout(3000);

   //loading the url 
   await page.goto("https://www.google.com/");
   await page.waitForTimeout(3000);
})