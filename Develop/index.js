const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'confirm',
            message: 'Hello. Would you like to create a README.md file for a project? (Required)',
            validate: confirmInput => {
                if (confirmInput) {
                    return true;
                } else {
                    console.log('Goodbye.');
                    return false;
                }
            }
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

    promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
