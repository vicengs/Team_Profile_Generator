const Employee = require("../lib/Employee");
class Manager extends Employee{
    constructor(name,id,email,role, officeNumber){
        super(name,id,email,role);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };
    getOfficeNumber(){
        return this.officeNumber;
    };
};
module.exports = Manager;