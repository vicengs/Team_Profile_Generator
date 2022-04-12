/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Engineer.test.js       */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
// Add Engineer library to use
const Engineer = require('../lib/Engineer');
// Add test to validate arguments of the Engineer class
test("Creates a Engineer object", () => {
    const engineer = new Engineer("Vicente","1","vicen1@hotmail.com","vicengs");
    expect(engineer.name).toBe("Vicente");
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("vicen1@hotmail.com");
    expect(engineer.github).toBe("vicengs");
    expect(engineer.role).toBe("Engineer");
});
// Add test to validate method to get name extends from Employee
test("Gets engineer's name value", () => {
    const engineer = new Engineer("Vicente");
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});
// Add test to validate method to get id extends from Employee
test("Gets engineer's id value", () => {
    const engineer = new Engineer("Vicente","1");
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});
// Add test to validate method to get email extends from Employee
test("Gets manager's email value", () => {
    const engineer = new Engineer("Vicente","1","vicen1@hotmail.com");
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});
// Add test to validate method to get github user
test("Gets manager's github value", () => {
    const engineer = new Engineer("Vicente","1","vicen1@hotmail.com","vicengs");
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// Add test to validate method to get role extends from Employee (override to Engineer)
test("Gets manager's role value", () =>{
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
});