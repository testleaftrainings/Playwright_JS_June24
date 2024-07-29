import { CusBrowser } from "./learnInterface"

//Concrete class
class LoadApplication implements CusBrowser{

    reportName: string ="Allure Report"

    startReport(): void {
        throw new Error("Method not implemented.")
    }
    launchBrowser(): void {
       console.log("ChromeBrowser")
    }
    fillAndEnter(): void {
        console.log("Method built with type and enter Congifuration for element action")
    }
    clickAndverifyTitle(): string {
       console.log("Method built to click and verify the title of the page")
       return "Title"
    }
    

}

 let app=new LoadApplication();
 app.startReport()
 app.clickAndverifyTitle()
console.log(app.reportName);