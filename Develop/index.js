// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "userName",
    message: "What is your Github username? (Required)",
    validate: userName => {
        if (userName) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "title",
    message: "What is your Project's name? (Required)",
    validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Please enter a project name!');
          return false;
        }
    }

},
{
    type: "input",
    name: "desc",
    message: "Please write a short description of your project."
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "npm i"
},
{
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test"
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
},
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
}];

const promptUser = () => {
    return inquirer.prompt(questions)
}; 

// TODO: Create a function to write README file
promptUser()
    .then(answers => {
        // console.log(answers);
        // var answers = JSON.parse(answers);
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(readme => {
        fs.writeFile('README.md', readme, (err) => {
            if (err) throw new Error(err);

            console.log('README complete! Check out README.md to see the output!');
       });
    });






// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
