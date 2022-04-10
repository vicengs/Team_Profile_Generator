/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Intern.js              */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
const Employee = require("../lib/Employee");
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
    };
    getSchool(){
        return this.school;
    };
};
module.exports = Intern;