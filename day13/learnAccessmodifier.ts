import { GenerateData } from "./learnStatic reference"

class EmpData{

   readonly empId:number
   readonly empName:string
   private empSalary:number
   protected phno:number
   empfname:string

    constructor(){
        this.empSalary=40000,
        this.empName="Murali"
        this.empId=121
    }

   public display(){
    this.empfname=GenerateData.getFirstname()
    console.log(`Details of emp :${this.empfname} ${this.empId} : ${this.empName} :${this.empSalary} : ${this.phno}`)
   }

   public get readSalary(){
       return this.empSalary;
   }

   public set changeSalaryValue(value:number){
     this.empSalary=value;
       
   }


}

const empDetails=new EmpData()
//empDetails.empId="Murali"

console.log("Initial Value "+empDetails.readSalary);

empDetails.changeSalaryValue=70000

console.log("Update value : "+empDetails.readSalary);

empDetails.display();