//to define a class 
//class className
class Employee{
    //property declared for an object
    empName:string   //class property  -->instance member -->related to the object of the class
    empId:number

    //method //logic written inside a class
    printdetails():string{
        console.log(this)
      //  console.log(`Details of the Employee: ${this.empName} : ${this.empId}`)
    return `${this.empId}`
    }
//this-->the current class property..

}

//to call the property or the method of a class -->have to create object
//create object outside the class
//let variablesName=new className(); -->create an object

const EmpDetails=new Employee(); //new classname()-constructor -->creating memory for your object 
EmpDetails.empName="Saritha"
EmpDetails.empId=123
EmpDetails.printdetails()

const NewJoinee=new Employee();
NewJoinee.empId=456
NewJoinee.empName="Baskar"
NewJoinee.printdetails()






export function emp(){  //independent logic -->can be called anywhere

}

emp();