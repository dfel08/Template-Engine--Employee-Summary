const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "What type of Employee would you like to enter?",
            choices: [
                "Engineer",
                "Manager",
                "Intern",
                "I'm finished"
            ]
        }
    ]).then(response => {
        switch (response.employeeType) {
            case "Engineer":
                createEngineer();
                break;
            case "Manager":
                createManager();
                break;
            case "Intern":
                createIntern();
                break;
            case "I'm finished":
                finish();
        }
    })
}
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        }
    ])
        .then(response => {
            let newEngineer = new Engineer(response.name, response.email, response.id, response.github)
            employees.push(newEngineer);
            start();
        })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's current school?"
        }
    ])
        .then(response => {
            let newIntern = new Intern(response.name, response.email, response.id, response.school)
            employees.push(newIntern);
            start();
        })
}

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])
        .then(response => {
            let newManager = new Manager(response.name, response.email, response.id, response.officeNumber)
            employees.push(newManager);
            start();
        })
}

function finish() {
    fs.writeFileSync(outputPath, render(employees));
}

start();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
