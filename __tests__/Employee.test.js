/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Employee.test.js       */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Employee library to use
const Employee = require('../lib/Employee');
// Add test to validate arguments of the Employee class
test("Creates a Employee object", () => {
    const employee = new Employee("Vicente","1","vicen1@hotmail.com");
    expect(employee.name).toBe("Vicente");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("vicen1@hotmail.com");
    expect(employee.role).toBe("Employee");
});
// Add test to validate method to get name
test("Gets employee's name value", () => {
    const employee = new Employee("Vicente");
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});
// Add test to validate method to get id
test("Gets employee's id value", () => {
    const employee = new Employee("Vicente","1");
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});
// Add test to validate method to get email
test("Gets employee's email value", () => {
    const employee = new Employee("Vicente","1","vicen1@hotmail.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// Add test to validate method to get role
test("Gets employee's role value", () =>{
    const employee = new Employee("Vicente","1","vicen1@hotmail.com","Employee");
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});