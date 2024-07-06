import {test} from  '@playwright/test'
test('Learn Alerts',async({page})=>{


    await page.goto("https://www.leafground.com/alert.xhtml");

    page.once('dialog',async alertType=>{
        console.log(alertType.type())
        console.log(alertType.message())
        await alertType.accept();
    })

    //SimpleAlert ->click Show 
    await page.locator("//span[text()='Show']").first().click();
    //ConfirmAlert
    
    page.once('dialog',async alertType=>{
        console.log(alertType.type())
        console.log(alertType.message())
        await alertType.accept();
    })
    await page.locator("//span[text()='Show']").nth(1).click();
    await page.waitForTimeout(3000)

})

test.only('Learn to handle alert',async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on('dialog',async alertType=>{
       const type=alertType.type()
        console.log(alertType.message())
        if(type=="prompt"){
            await alertType.accept("Vidya");
            }
            else{
            await alertType.dismiss()
            }
    })

    //SimpleAlert ->click Show 
    await page.locator("//span[text()='Show']").first().click();
    //ConfirmAlert
    
    await page.locator("//span[text()='Show']").nth(1).click();
   

    //prompt alert  
    //locator chaining
    const promptMsg= page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"})
    await promptMsg.getByRole("button",{name:"Show"}).click();
    const innerText= await page.innerText("#confirm_result")
    console.log(innerText)

    await page.click("//span[text()='Delete']");
    await page.click("//span[text()='Yes']")

    await page.waitForTimeout(3000)

})