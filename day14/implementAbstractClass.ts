import { TestReport } from "./learnAbstractClass"

class SalesReport extends TestReport{
    generateReport(): void {
       console.log("Generating allure Report")
    }

    takeScreenshot(): void {
        console.log("")
    }
    
}

