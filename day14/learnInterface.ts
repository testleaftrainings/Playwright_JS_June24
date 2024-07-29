export interface CusReporter{
  startReport():void;
}


export interface CusBrowser extends CusReporter{

     reportName:string;
    /*
     @launchBrowser :supports to configure with browser
    */
    launchBrowser():void;
/*
     @fillandEnter :supports to handle multiple actions like type and enter into the textfield
    */

    fillAndEnter():void
    clickAndverifyTitle():string;

}


//new CusBrowser();  not applicable