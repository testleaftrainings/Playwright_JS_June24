import { Salesforce } from "./salesforceLogin";


class salesHomepage{

  async clickApplauncher(){
      new Salesforce().launchBrowser();

  }

}