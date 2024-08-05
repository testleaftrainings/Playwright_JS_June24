import { TestInfo } from "playwright/test";
import { createIssue } from "./JiraIntegration";


export async function logDefectinJira(testInfo:TestInfo){
    if(testInfo.status=="failed"){
        const summary=`Test failed ${testInfo.title}`
        const description=`Test failed due to the ${testInfo.error?.message}`
       createIssue(summary,description)
    } 
    


  

}