/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Engineer.js            */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Employee library to use
const Employee = require("../lib/Employee");
// Declare Engineer class and extends properties and methods from Employee
class Engineer extends Employee{
    // Constructor class and arguments
    constructor(name,id,email,github){
        // Invoke properties and methods from Employee
        super(name,id,email);
        this.github = github;
        // Override role value (value used)
        this.role = "Engineer";
    };
    // Method to get github
    getGithub(){
        return this.github;
    };
};
// Export class to invoke out
module.exports = Engineer;