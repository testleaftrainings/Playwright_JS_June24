import {test,expect} from "@playwright/test";


test ("Auto wait",async({page})=>{
    await page.goto("https://www.leafground.com/waits.xhtml")
    // const waitForVisibilty= page.locator(".card").filter({hasText:"Wait for Visibility"});
    const waitForVisibilty= page.locator(".card").filter({has:page.getByText("Wait for Visibility")}) 
    await waitForVisibilty.getByRole("button").filter({hasText:"Click"}).click();
    const imhere= waitForVisibilty.getByRole("button").filter({hasText:"I am here"});
    console.log(await imhere.innerText());
    // await expect(imhere).toBeVisible({timeout:12000});
    // await page.waitForTimeout(4000);


    //await page.locator("text=Click").first().click()


})