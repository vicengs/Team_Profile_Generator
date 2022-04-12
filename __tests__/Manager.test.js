/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Manager.test.js        */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Manager library to use
const Manager = require('../lib/Manager');
// Add test to validate arguments of the Manager class
test("Creates a Manager object", () => {
    const manager = new Manager("Vicente","1","vicen1@hotmail.com","005");
    expect(manager.name).toBe("Vicente");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("vicen1@hotmail.com");
    expect(manager.officeNumber).toBe("005");
    expect(manager.role).toBe("Manager");
});
// Add test to validate method to get name extends from Employee
test("Gets manager's name value", () => {
    const manager = new Manager("Vicente");
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});
// Add test to validate method to get id extends from Employee
test("Gets manager's id value", () => {
    const manager = new Manager("Vicente","1");
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});
// Add test to validate method to get email extends from Employee
test("Gets manager's email value", () => {
    const manager = new Manager("Vicente","1","vicen1@hotmail.com");
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});
// Add test to validate method to get office number
test("Gets manager's office number value", () => {
    const manager = new Manager("Vicente","1","vicen1@hotmail.com","1005");
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});
// Add test to validate method to get role extends from Employee (override to Manager)
test("Gets manager's role value", () =>{
    const manager = new Manager();
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
});