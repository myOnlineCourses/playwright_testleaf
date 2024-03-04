/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

import {test, chromium} from '@playwright/test'

test ('Edit Individuals' , async() => {
   const browser = await  chromium.launch({headless:false})
   const context = await browser.newContext()
   const page = await context.newPage()

   //Login to URL



})