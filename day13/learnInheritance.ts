import {Page} from '@playwright/test'
export class SFLogin{

    protected username:string

    constructor(fname:string){
        this.username="demo"
    }
    displayLoginform(){
        console.log(`SFLogin Page information ${this.username}`)
    }
}