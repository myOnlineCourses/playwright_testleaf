import {test, chromium} from '@playwright/test'

test ('Learning CSS and Xpath Locators', async() =>{

    const browser = await chromium.launch({headless:false, channel: 'chrome'})
   const context = await browser.newContext()
   const page = await context.newPage()

   await page.goto('http://leaftaps.com/opentaps/control/main')
   
})