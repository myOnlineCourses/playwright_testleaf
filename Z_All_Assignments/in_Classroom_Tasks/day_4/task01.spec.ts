/*
Classroom:1

Launch browser
load the url
Enter the credentials -as demoSalesManager crmsfa
Click on Login
Click on crmsfa
Click on Leads
Click on CreateLead
Enter Company name 
Enter First name
Enter last name
Click Create Lead button
Print the page title
*/

import {test, chromium} from "@playwright/test";
test ('Learning CSS and Xpath ADV Locators', async() =>{

const browser = await chromium.launch({headless:false, channel:"chrome"});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("[id='username']").fill("demoSalesManager");
await page.locator("[id='password']").fill("crmsfa");
await page.click("[class='decorativeSubmit']");
 page.locator("div#label>a").click
 page.locator("[id='ext-gen602']").click;
 page.locator("[id='ext-gen886']").click;
await page.locator("[class='inputBox']").fill("Jassan")
//page.getAttribute(type ="text","firstName")




})
