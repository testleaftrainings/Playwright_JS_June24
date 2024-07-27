import { Page } from "@playwright/test";

export class SalesLogin{

     //pageProperty -->receive the instance form pagefixture
      page:Page
    

    constructor(page:Page){ // -->receive the instance form pagefixture when called in test() thrugh opb
        this.page=page
        this.loadUrl();
    }

    //methods for login structure

    //loadurl, enterusername,enterPassword ,clickLogin

    //property -->url ,username , password , locators

   public async loadUrl(){
        await this.page.goto("https://login.salesforce.com/")
   }
    async enterCredentials(){
        await this.page.fill("#username","vidyar@testleaf.com");
        await this.page.fill("#password","Sales@123")
        await this.page.click("#Login")
    }
    async verifyLogin(){
        await this.page.waitForTimeout(3000)
       console.log( await this.page.title());
    }
}

