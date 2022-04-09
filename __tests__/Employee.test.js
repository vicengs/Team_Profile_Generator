const Employee = require('../lib/Employee');
test("Creates a Employee object", () => {
    const employee = new Employee("Vicente","1","vicen1@hotmail.com");
    expect(employee.name).toBe("Vicente");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("vicen1@hotmail.com");
    expect(employee.role).toBe("Employee");
});
test("Gets employee's name value", () => {
    const employee = new Employee("Vicente");
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});
test("Gets employee's id value", () => {
    const employee = new Employee("Vicente","1");
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});
test("Gets employee's email value", () => {
    const employee = new Employee("Vicente","1","vicen1@hotmail.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test("Gets employee's role value", () =>{
    const employee = new Employee("Vicente","1","vicen1@hotmail.com","Employee");
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});