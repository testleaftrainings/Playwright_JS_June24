"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emp = emp;
//to define a class 
//class className
var Employee = /** @class */ (function () {
    function Employee() {
    }
    //method //logic written inside a class
    Employee.prototype.printdetails = function () {
        console.log(this);
        //  console.log(`Details of the Employee: ${this.empName} : ${this.empId}`)
    };
    return Employee;
}());
//to call the property or the method of a class -->have to create object
//create object outside the class
//let variablesName=new className(); -->create an object
var EmpDetails = new Employee(); //new classname()-constructor -->creating memory for your object 
EmpDetails.empName = "Saritha";
EmpDetails.empId = 123;
EmpDetails.printdetails();
var NewJoinee = new Employee();
NewJoinee.empId = 456;
NewJoinee.empName = "Baskar";
NewJoinee.printdetails();
function emp() {
}
emp();
