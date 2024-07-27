"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var learnStatic_reference_1 = require("./learnStatic reference");
var EmpData = /** @class */ (function () {
    function EmpData() {
        this.empSalary = 40000,
            this.empName = "Murali";
        this.empId = 121;
    }
    EmpData.prototype.display = function () {
        this.empfname = learnStatic_reference_1.GenerateData.getFirstname();
        console.log("Details of emp :".concat(this.empfname, " ").concat(this.empId, " : ").concat(this.empName, " :").concat(this.empSalary, " : ").concat(this.phno));
    };
    Object.defineProperty(EmpData.prototype, "readSalary", {
        get: function () {
            return this.empSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpData.prototype, "changeSalaryValue", {
        set: function (value) {
            this.empSalary = value;
        },
        enumerable: false,
        configurable: true
    });
    return EmpData;
}());
var empDetails = new EmpData();
//empDetails.empId="Murali"
console.log("Initial Value " + empDetails.readSalary);
empDetails.changeSalaryValue = 70000;
console.log("Update value : " + empDetails.readSalary);
empDetails.display();
