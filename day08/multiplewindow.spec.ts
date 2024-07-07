import test from "@playwright/test";



test("Learn to handle pages", async ({ page, context }) => {
   
    await page.goto("https://www.leafground.com/window.xhtml")
    
    //create a promise -->handle all the opened windows
    //action which trigggers the event 
    //resolve the promise

    const [multiWindow]=await Promise.all([
        context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()
    ])

    const windows=multiWindow.context().pages();
    console.log(windows.length)


    for(let tab of windows){
        await tab.waitForLoadState('load')
        console.log(await tab.title())
    }


    windows.forEach(tab=>{       
        console.log( tab.title())
    })


    let webPage:any
    for(let index=0;index<windows.length;index++){
        const pageTitle=await windows[index].title();
        console.log(pageTitle)
        if(pageTitle=="Web Table"){
           windows[index].locator("[placeholder='Search']").fill("Canada")
        }
    }
     

    webPage.waitForLoadState('load')
    console.log(webPage)
    await webPage.locator("[placeholder='Search']").fill("Canada")
  





})
