/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Team.js               */
/* Author   : Vicente Garcia         */
/* Date     : 04/09/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generatePage = require('../src/pageTemplate');
function Team(){
    this.engineers = [];
    this.interns = [];
    Team.prototype.initializeTeam = function(){
        this.getManager();
    };
    Team.prototype.getManager = function(){
        this.getEmployee("Manager", "office number");
    };
    Team.prototype.getEmployee = function(employee, empProperty){
        inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: "What is the " + employee + "’s name?"
            },
            {
                type: "text",
                name: "id",
                message: "What is the " + employee + "’s Id?"
            },
            {
                type: "text",
                name: "email",
                message: "What is the " + employee + "’s email?"
            },
            {
                type: "text",
                name: "empProperty",
                message: "What is the " + employee + "’s " + empProperty + "?"
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
                type: 'list',
                name: 'option',
                message: 'Choose an option:',
                choices: ['Add Engineer'
                         ,'Add Intern'
                         ,'Finish']
            }
        ])
        .then(({option}) => {
            if (option === "Add Engineer"){
                console.log(`=======================================
Please provide the Engineer information
=======================================`);
                this.getEngineer();
            }else if(option === "Add Intern"){
                console.log(`=====================================
Please provide the Intern information
=====================================`);
                this.getIntern();
            }else{
                console.log(generatePage(this.manager, this.engineers, this.interns));
            };
        });
    };
    Team.prototype.getEngineer = function(){
        this.getEmployee("Engineer", "github");
    };
    Team.prototype.getIntern = function(){
        this.getEmployee("Intern", "school");
    };
};
module.exports = Team;