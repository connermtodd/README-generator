const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'initialize',
            message: 'Hello. Would you like to create a README.md file for a project? (Required)'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'project',
            message: 'Please enter the name of your project.'
        },
        {
            type: 'input',
            name: 'README',
            message: 'Please give a brief description of your project.',
            when: ({ README }) => {
                if (README) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

    questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
