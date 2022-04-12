/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Intern.test.js         */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Intern library to use
const Intern = require('../lib/Intern');
// Add test to validate arguments of the Intern class
test("Creates a Intern object", () => {
    const intern = new Intern("Vicente","1","vicen1@hotmail.com","University of Texas");
    expect(intern.name).toBe("Vicente");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("vicen1@hotmail.com");
    expect(intern.school).toBe("University of Texas");
    expect(intern.role).toBe("Intern");
});
// Add test to validate method to get name extends from Employee
test("Gets intern's name value", () => {
    const intern = new Intern("Vicente");
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});
// Add test to validate method to get id extends from Employee
test("Gets intern's id value", () => {
    const intern = new Intern("Vicente","1");
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});
// Add test to validate method to get email extends from Employee
test("Gets intern's email value", () => {
    const intern = new Intern("Vicente","1","vicen1@hotmail.com");
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});
// Add test to validate method to get school
test("Gets intern's school value", () => {
    const intern = new Intern("Vicente","1","vicen1@hotmail.com","University of Texas");
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// Add test to validate method to get role extends from Employee (override to Intern)
test("Gets intern's role value", () =>{
    const intern = new Intern();
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
});