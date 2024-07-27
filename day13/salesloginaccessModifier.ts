import { Page ,Locator} from "@playwright/test";

export class SalesLogin{

    
      readonly page:Page    
      readonly usernameLocator:Locator;
      readonly passwordLocator:Locator; //password ->visibility is public and acess is like final
      loginButton:Locator

    constructor(page:Page){ // -->receive the instance form pagefixture when called in test() thrugh opb
        this.page=page
        this.usernameLocator=this.page.locator("#username")
        this.passwordLocator=this.page.locator("#password")
        this.loginButton=this.page.locator("#Login")
        this.loadUrl();
    }

   public async loadUrl(){
        await this.page.goto("https://login.salesforce.com/")
   }
    async enterCredentials(){
        // const uname= this.page.locator("#username")
        // await uname.fill("vidyar@testleaf.com");
        await this.usernameLocator.fill("vidyar@testleaf.com")
        await this.passwordLocator.fill("Sales@123")
        await this.loginButton.click()
    }
    async verifyLogin(){
        await this.page.waitForTimeout(3000)
       console.log( await this.page.title());
    }
}

