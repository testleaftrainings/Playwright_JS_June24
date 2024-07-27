import {Page,BrowserContext,Browser,chromium} from '@playwright/test'

export class Salesforce{

   username:string
   password:string

   async launchBrowser():Promise<{page:Page,context:BrowserContext,browser:Browser}>{
       const browser=  await chromium.launch({headless:false})
       const context= await browser.newContext();
       const page=await context.newPage(); //local variable visible only to launchBrowser
       return {page,context,browser};
   }

   async loadUrl():Promise<string>{
    //destructuring 
    const {page,context,browser}=await this.launchBrowser();
    await page.goto("https://login.salesforce.com/");
    return await page.title();
   }
}

 const loadApp=new Salesforce();
 loadApp.launchBrowser();
 const title=loadApp.loadUrl();
 console.log(title)