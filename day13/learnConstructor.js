"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emp = emp;
//to define a class 
//class className
var Employee = /** @class */ (function () {
    //special method to initialize the object while creating /assining the value
    function Employee(empname, empid) {
        this.empName = empname; //value of constructor call is assigned to the instance variable
        this.empId = empid;
        this.printdetails();
    }
    Employee.prototype.printdetails = function () {
        console.log(this);
        console.log("Details of the Employee:  : ".concat(this.empId));
    };
    return Employee;
}());
//parametrized constructor
var EmpDetails = new Employee("Purushothaman", 782);
//EmpDetails.printdetails()
//empName=""
//empId=
// const NewJoinee=new Employee("Saritha",34);
// NewJoinee.printdetails(789300313993)
function emp() {
}
emp();
