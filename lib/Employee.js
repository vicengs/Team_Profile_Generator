/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Employee.js            */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Declare Employee class
class Employee{
    // Constructor and arguments
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        // Role property is declared but this value will never used
        this.role = "Employee";
    };
    // Method to get name
    getName(){
        return this.name;
    };
    // Method to get id
    getId(){
        return this.id;
    };
    // Method to get email
    getEmail(){
        return this.email;
    };
    // Method to get role
    getRole(){
        return this.role;
    };
};
// Export class to invoke out
module.exports = Employee;