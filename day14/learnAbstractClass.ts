export abstract class TestReport{

    

   abstract generateReport():void;

    takeScreenshot(){
        console.log("Screenshot are generated for each step")
    }

}


//new TestReport();  not applicable