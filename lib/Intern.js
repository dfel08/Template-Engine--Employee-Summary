// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee")

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;