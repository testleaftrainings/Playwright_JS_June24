import {chromium, test} from "@playwright/test"

test("Basic Locators",async()=>{
        const browser= await chromium.launch({headless:false})  ;
        const browserContext=await browser.newContext();
        const page= await browserContext.newPage();
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("DemosalesManager");
         page.fill("#password","crmsfa");
        await page.locator(".decorativeSubmit").click();
        await page.waitForTimeout(3000);

})