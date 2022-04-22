var task_list = [];
var index_count = 0;
var README_String ="";

const inquirer = require('inquirer');
const fs = require('fs');

// ---------------------------------------------------------PROMPT TABLE OF CONTENTS
function prompt_TOC () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: '\nWelcome to the README AutoGenerator. What is your full name?\n',
                name: 'user_name',
            },
            {
                type: 'input',
                message: '\nWhat is the name of your project?\n',
                name: 'proj_name',
            },
            {
                type: 'checkbox',
                message: '\nWhich sections you would like to include in the README file?\n',
                name: 'listOfTasks',
                pageSize: 8,
                choices: ['Description', 'Assignment Scope', 'Installation Instructions', 'Usage', 'User Story', "Acceptance Criteria", 'Contributors', 'License'],
            }
        ])
        .then((input_data) => {
            console.log("\n" +input_data.listOfTasks[0]);
            fs.writeFileSync('README.md', generate_README(input_data));
            prompt_Description();
        });
}
// ---------------------------------------------------------------------------------

// ------------------------------------------------------------WRITE/GENERATE README
const generate_README = (input_data) => {
    README_String=`# ${input_data.proj_name}
(Auto-generated README, written by ${input_data.user_name})

## Table of Contents`;

input_data.listOfTasks.forEach(element => {
    switch (element) {
    case "Description":
        README_String += `
- [Description](#descr)`;
        break;
    case "Assignment Scope":
        README_String += `
- [Assignment Scope](#scope)`;
        break;
    case "Installation Instructions":
        README_String += `
- [Installation Instructions](#inst)`;
        break; 
    case "Usage":
        README_String += `
- [Usage](#usage)`;
        break;
    case "User Story":
        README_String += `
- [User Story](#userStory)`;
        break;
    case "Acceptance Criteria":
        README_String += `
- [Acceptance Criteria](#accCrit)`;
        break;
    case "License":
        README_String += `
- [License](#lisc)`;
        break;
    }
});

README_String += `
        
`;
return README_String;
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------PROMPT DESCRIPTION
function prompt_Description () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: '\nWhat is the description for your project?\n',
                name: 'description',
            }
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Description(input_data));
            prompt_Scope();
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------APPEND DESCRIPTION
const append_Description = (input_data) => {
    README_String = `
## Assignment Description
${input_data.description}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------PROMPT SCOPE
function prompt_Scope () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is the scope for your project?\n',
            name: 'scope',
        }
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Scope(input_data));
            prompt_Installation();
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------APPEND SCOPE
const append_Scope = (input_data) => {
    README_String = `
## Assignment Scope
${input_data.scope}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// --------------------------------------------------------------PROMPT INSTALLATION
function prompt_Installation () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What are the installation instructions for your project?\n',
            name: 'installation',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Installation(input_data));
            prompt_Usage();
        });
}
// ---------------------------------------------------------------------------------

// --------------------------------------------------------------APPEND INSTALLATION
const append_Installation = (input_data) => {
    README_String = `
## Assignment Installation
${input_data.scope}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------PROMPT USAGE
function prompt_Usage () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'How is this project going to be used?\n',
            name: 'usage',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Usage(input_data));
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------APPEND USAGE
function prompt_UserStory () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is the user story for this project?\n',
            name: 'user_story',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_UserStory(input_data));
        });
}
function prompt_AcceptCrit () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is the acceptance criteria for this project?\n',
            name: 'acceptance_criteria',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_AcceptCrit(input_data));
        });
}
function prompt_Contributors () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What are the names of your contributors?\n',
            name: 'contributors',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Contributors(input_data));
        });
}
function prompt_License () {
    inquirer
        .prompt([
        {
            type: 'list',
            message: 'Which of the following licenses do you wish to use?\n',
            name: 'licenses',
            choices: ["MIT", "LIC"],
            default: "MIT"
        }
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Contributors(input_data));
        });
}   

function checkLic (input_data) {
    if(input_data.licenses) {
        console.log("licenses are found");
    }
}

prompt_TOC ();