/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Manager.js             */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
const Employee = require("../lib/Employee");
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };
    getOfficeNumber(){
        return this.officeNumber;
    };
};
module.exports = Manager;