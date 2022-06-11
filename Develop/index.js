// TODO: Include packages needed for this application
var inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "userName",
    message: "What is your Github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "projectName",
    message: "What is your Project's name?"
},
{
    type: "input",
    name: "desc",
    message: "Please write a short description of your project."
},
{
    type: "input",
    name: "license",
    message: "What kind of license should your project have?"
},
{
    type: "input",
    name: "install-command",
    message: "What command should be run to install dependencies?"
},
{
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?"
},
{
    type: "input",
    name: "using",
    message: "What does the user need to know about using the repo?"
},
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
