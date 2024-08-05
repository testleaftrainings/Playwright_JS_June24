import {test,expect } from '@playwright/test'
test(`Visual Testing`,async({page})=>{

await page.goto("https://www.testleaf.com/")
const screenshot=await page.screenshot();
expect(screenshot).toMatchSnapshot('testleaf.png')
})


// async verifyScreenshots(locator:string,fileName:string){
//     expect(screenshot).toMatchSnapshot('testleaf.png')
// }