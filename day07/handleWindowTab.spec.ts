import { test, chromium } from '@playwright/test'

test('Learn to handle multiple Tabs', async ({ page, context }) => {

    await page.goto("https://www.leafground.com/window.xhtml")
    const page1 = await context.newPage()
    await page1.goto("https://www.google.com")
    const page2 = await context.newPage()
    await page2.goto("https://www.amazon.in")

    const allPages = context.pages()
    console.log(allPages.length)

    // console.log(await allPages[0].title());
    // await allPages[0].bringToFront()
    // await allPages[0].locator("//span[text()='Open']").click()

    // await allPages[1].bringToFront()
    // console.log(await allPages[1].title());

    // const allPageCount=context.pages()
    // console.log(allPageCount.length)

    for (let page of allPages) {  //for each loop
        console.log(await page.title())
    }

})

test.only("Learn to handle pages", async ({ page, context }) => {
    //    const browser= await chromium.launch()
    //    const bContext= await browser.newContext();
    //   const page=await bContext.newPage();
    await page.goto("https://www.leafground.com/window.xhtml")
    const childPage = context.waitForEvent('page');
    await page.locator("//span[text()='Open']").click();
    const newPage = await childPage;

    const pages = context.pages();
    console.log(pages.length)
    await newPage.bringToFront();
    console.log(await newPage.title());
    //open a new page
    //event listener
    //  const pageEvent=context.waitForEvent('page');  //creating a promise  to handle the event sequentially
    //action performed -->emits a new child page with the parent instance
    // const newPage=await pageEvent;  //resolve 


})
