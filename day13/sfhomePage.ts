import { SFLogin } from "./learnInheritance";
import {Page} from '@playwright/test'


class SFHome extends SFLogin{

    constructor(page:string ,title:string){
       super(page);
       this.verifytitle(title)
    }

verifytitle(title:string){    
   this.username="Vidya" //overridden
    console.log(`title is verified ${this.username} ${title}` )
}

}



const hpage = new SFHome("Bharathi" ,"Home | Salesforce")
hpage.displayLoginform()





