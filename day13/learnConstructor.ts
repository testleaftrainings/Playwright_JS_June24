//to define a class 
//class className
class Employee{
    empName:string   //instance variable - global variable
    empId:number
    phno:number
    //special method to initialize the object while creating /assining the value
    constructor(empname:string,empid:number){ //empname & empid -->local variable -->method
     this.empName=empname  //value of constructor call is assigned to the instance variable
     this.empId=empid
     this.printdetails()
    }
    
    printdetails(){      //instance method  
        console.log(this)
        console.log(`Details of the Employee:  : ${this.empId}`)
    }


}
//parametrized constructor
new Employee("Purushothaman",782); 
//EmpDetails.printdetails()

//empName=""
//empId=

// const NewJoinee=new Employee("Saritha",34);
// NewJoinee.printdetails(789300313993)






export function emp(){  //independent logic -->can be called anywhere

}

emp();