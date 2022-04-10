/* --------------------------------- */
/* Project  : Team Profile Generator */
/* File     : Engineer.test.js       */
/* Author   : Vicente Garcia         */
/* Date     : 04/07/2022             */
/* Modified : 04/09/2022             */
/* --------------------------------- */
const Engineer = require('../lib/Engineer');
test("Creates a Engineer object", () => {
    const engineer = new Engineer("Vicente","1","vicen1@hotmail.com","vicengs");
    expect(engineer.name).toBe("Vicente");
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("vicen1@hotmail.com");
    expect(engineer.github).toBe("vicengs");
    expect(engineer.role).toBe("Engineer");
});
test("Gets engineer's name value", () => {
    const engineer = new Engineer("Vicente");
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});
test("Gets engineer's id value", () => {
    const engineer = new Engineer("Vicente","1");
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});
test("Gets manager's email value", () => {
    const engineer = new Engineer("Vicente","1","vicen1@hotmail.com");
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});
test("Gets manager's github value", () => {
    const engineer = new Engineer("Vicente","1","vicen1@hotmail.com","vicengs");
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test("Gets manager's role value", () =>{
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
});