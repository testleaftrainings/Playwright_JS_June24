import {chromium,expect, test} from "@playwright/test"

test("Basic Locators",async({page})=>{        
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.screenshot({path:"./Screenshot/loginPage.png"})
        const username= page.locator("#username");
        username.fill("DemosalesManager");
        await username.screenshot({path:"./Screenshot/username.png"})
         page.fill("#password","crmsfa");
        await page.locator(".decorativeSubmit").click();
        await page.waitForTimeout(3000);
        

})