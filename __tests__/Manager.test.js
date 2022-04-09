const Manager = require('../lib/Manager');
test("Creates a Manager object", () => {
    const manager = new Manager("Vicente","1","vicen1@hotmail.com","Manager","005");
    expect(manager.name).toBe("Vicente");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("vicen1@hotmail.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officeNumber).toBe("005");
});
test("Gets manager's name value", () => {
    const manager = new Manager("Vicente");
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});
test("Gets manager's id value", () => {
    const manager = new Manager("Vicente","1");
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});
test("Gets manager's email value", () => {
    const manager = new Manager("Vicente","1","vicen1@hotmail.com");
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});
test("Gets manager's role value", () =>{
    const manager = new Manager("Vicente","1","vicen1@hotmail.com","Manager");
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
});
test("Gets manager's office number value", () => {
    const manager = new Manager("Vicente","1","vicen1@hotmail.com","Manager","1005");
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});