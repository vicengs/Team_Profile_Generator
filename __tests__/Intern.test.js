/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Intern.test.js         */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
const Intern = require('../lib/Intern');
test("Creates a Intern object", () => {
    const intern = new Intern("Vicente","1","vicen1@hotmail.com","University of Texas");
    expect(intern.name).toBe("Vicente");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("vicen1@hotmail.com");
    expect(intern.school).toBe("University of Texas");
    expect(intern.role).toBe("Intern");
});
test("Gets intern's name value", () => {
    const intern = new Intern("Vicente");
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});
test("Gets intern's id value", () => {
    const intern = new Intern("Vicente","1");
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});
test("Gets intern's email value", () => {
    const intern = new Intern("Vicente","1","vicen1@hotmail.com");
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});
test("Gets intern's school value", () => {
    const intern = new Intern("Vicente","1","vicen1@hotmail.com","University of Texas");
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test("Gets intern's role value", () =>{
    const intern = new Intern();
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
});