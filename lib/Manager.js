/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Manager.js             */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Employee library to use
const Employee = require("../lib/Employee");
// Declare Manager class and extends properties and methods from Employee
class Manager extends Employee{
    // Constructor class and arguments
    constructor(name,id,email,officeNumber){
        // Invoke properties and methods from Employee
        super(name,id,email);
        this.officeNumber = officeNumber;
        // Override role value (value used)
        this.role = "Manager";
    };
    // Method to get office number
    getOfficeNumber(){
        return this.officeNumber;
    };
};
// Export class to invoke out
module.exports = Manager;