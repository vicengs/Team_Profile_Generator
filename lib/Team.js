/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Team.js               */
/* Author   : Vicente Garcia         */
/* Date     : 04/09/2022             */
/* Modified : 04/10/2022             */
/* --------------------------------- */
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateHTML = require("../src/pageTemplate");
const { writeFile, copyFile } = require("../utils/generatePage.js");
function Team(){
    this.engineers = [];
    this.interns = [];
    Team.prototype.initializeTeam = function(){
        this.getEmployee("Manager", "office number");
    };
    Team.prototype.getEmployee = function(employee, empProperty){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the " + employee + "’s name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the " + employee + "’s name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the " + employee + "’s Id?",
                validate: idInput => {
                    if (idInput) {
                        if(!isNaN(parseInt(idInput))){
                            return true;
                        }else{
                            console.log(" <-- Please enter a number to the " + employee + "’s Id!");
                            return false;
                        };
                    } else {
                        console.log("Please enter the " + employee + "’s Id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the " + employee + "’s e-mail?",
                validate: emailInput => {
                    if (emailInput) {
                        if (emailInput.indexOf("@") < 0){
                            console.log('@ <-- Please enter a valid e-mail!');
                            return false;
                        };
                        return true;
                    } else {
                        console.log('Please enter a valid e-mail!');
                        return false;
                    };
                }
            },
            {
                type: "input",
                name: "empProperty",
                message: "What is the " + employee + "’s " + empProperty + "?",
                validate: propertyInput => {
                    if (propertyInput) {
                        if (empProperty === "office number"){
                            if(!isNaN(parseInt(propertyInput))){
                                return true;
                            }else{
                                console.log(" <-- Please enter a number to the " + employee + "’s " + empProperty + "!");
                                return false;
                            };
                        };
                        return true;
                    } else {
                        console.log("Please enter the " + employee + "’s " + empProperty + "!");
                        return false;
                    }
                }
            },
        ])
        .then(({ name, id, email, empProperty }) => {
            switch (employee) {
                case "Manager":
                    this.manager = new Manager(name, id, email, empProperty);
                    break;
                case "Engineer":
                    this.engineers.push(new Engineer(name, id, email, empProperty));
                    break;
                case "Intern":
                    this.interns.push(new Intern(name, id, email, empProperty));
                    break;
            };
            this.getOption();
        });
    };
    Team.prototype.getOption = function(){
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Choose an option:",
                choices: ["Add Engineer"
                         ,"Add Intern"
                         ,"Finish"]
            }
        ])
        .then(({option}) => {
            if (option === "Add Engineer"){
                console.log(`  =======================================
  Please provide the Engineer information
  =======================================`);
                this.getEmployee("Engineer", "github");
            }else if(option === "Add Intern"){
                console.log(`  =====================================
  Please provide the Intern information
  =====================================`);
                this.getEmployee("Intern", "school");
            }else{
                try{
                    copyFile(writeFile(generateHTML(this.manager, this.engineers, this.interns)));
                } catch(error) {
                    console.error(error);
                };
            };
        });
    };
};
module.exports = Team;