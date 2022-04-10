/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Engineer.js            */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
const Employee = require("../lib/Employee");
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        this.role = "Engineer";
    };
    getGithub(){
        return this.github;
    };
};
module.exports = Engineer;