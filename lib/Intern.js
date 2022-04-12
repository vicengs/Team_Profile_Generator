/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Intern.js              */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Employee library to use
const Employee = require("../lib/Employee");
// Declare Intern class and extends properties and methods from Employee
class Intern extends Employee{
    // Constructor class and arguments
    constructor(name,id,email,school){
        // Invoke properties and methods from Employee
        super(name,id,email);
        this.school = school;
        // Override role value (value used)
        this.role = "Intern";
    };
    // Method to get school
    getSchool(){
        return this.school;
    };
};
// Export class to invoke out
module.exports = Intern;