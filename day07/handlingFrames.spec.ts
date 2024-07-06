import { test } from '@playwright/test'

test('Learn to handle Frame using count', async ({ page }) => {

    await page.goto("https://www.leafground.com/frame.xhtml")
    //to get the count
    const frameCount = page.frames()  //array -->index starts with zero
    console.log(frameCount.length)
    // await page.click("#Click");
    //frameCont[0] -->mainfrmae -->parent webPage
    await frameCount[1].click("#Click");
    //await frameCount[1].fill("#Click","");
    //console.log(await frameCount[2].locator("#Click").innerText())
    console.log(await frameCount[2].innerText("#Click"))
})


test('Learn to handle Frame using frame Oject', async ({ page }) => {
    await page.goto("https://www.leafground.com/frame.xhtml")
    const frameUrl = page.frame({ url: "https://www.leafground.com/default.xhtml" })
    await frameUrl?.click("[id=Click]")  //? -->return null if no frame present and returns the framel when frame present
    console.log(await frameUrl?.innerText("[id=Click]"));
})

test.only('Learn to handle Frame using frameLocator', async ({ page }) => {
    await page.goto("https://www.leafground.com/frame.xhtml")

    const frameElement = page.frameLocator("iframe").first();
    await frameElement.locator("#Click").click();
    console.log(await frameElement.locator("#Click").innerText())

    //nested frames

    const outerFrame=page.frameLocator("iframe").nth(2);  //3rd frame
    const innerFrame= outerFrame.frameLocator("#frame2"); //1st frme (inside 3rd frame)
    await innerFrame.locator("#Click").click()//target element
    console.log(await innerFrame.locator("#Click").innerText())

    await page.waitForTimeout(3000);
})