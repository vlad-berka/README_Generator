var task_list = [];
var README_String ="";
var global_username ='';

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// The function 'prompt_TOC' below allows for the user to check which sections they would like to include and turns them into an array called "task_list";

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
                choices: ['Description', 'Assignment Scope', 'Installation Instructions', 'Usage', 'User Story', "Acceptance Criteria", 'Contributors', 'Tests', 'License'],
            }
        ])
        .then((input_data) => {
            task_list = input_data.listOfTasks;
            fs.writeFileSync('README.md', generate_README(input_data));
        });
}
// ---------------------------------------------------------------------------------

// ----------------------------------------WRITE TABLE OF CONTENTS / GENERATE README
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
    case "Contributors":
        README_String += `
- [Contributors](#contrib)`;
            break;
    case "Tests":
        README_String += `
- [Test](#test)`;
            break;
    case "License":
        README_String += `
- [License](#lisc)`;
        break;
    }
});

README_String += `
        
`;
global_username = input_data.user_name;
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
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------APPEND DESCRIPTION
const append_Description = (input_data) => {
    README_String = `
## Project Description
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
            message: '\nWhat is the scope for your project?\n',
            name: 'scope',
        }
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Scope(input_data));
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------APPEND SCOPE
const append_Scope = (input_data) => {
    README_String = `
## Project Scope
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
            message: '\nWhat are the installation instructions for your project?\n',
            name: 'installation',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Installation(input_data));
        });
}
// ---------------------------------------------------------------------------------

// --------------------------------------------------------------APPEND INSTALLATION
const append_Installation = (input_data) => {
    README_String = `
## Project Installation Instructions
${input_data.installation}    

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
            message: '\nHow is this project going to be used?\n',
            name: 'usage',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Usage(input_data));
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------APPEND USAGE
const append_Usage = (input_data) => {
    README_String = `
## Project Usage Instructions
${input_data.usage}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// ----------------------------------------------------------------PROMPT USER STORY
function prompt_UserStory () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: '\nWhat is the user story for this project?\n',
            name: 'user_story',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_UserStory(input_data));
        });
}
// ---------------------------------------------------------------------------------

// ----------------------------------------------------------------APPEND USER STORY
const append_UserStory = (input_data) => {
    README_String = `
## General Project User Story
${input_data.user_story}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// -------------------------------------------------------PROMPT ACCEPTANCE CRITERIA
function prompt_AcceptCrit () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: '\nWhat is the acceptance criteria for this project?\n',
            name: 'acceptance_criteria',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_AcceptCrit(input_data));
        });
}
// ---------------------------------------------------------------------------------

// -------------------------------------------------------APPEND ACCEPTANCE CRITERIA
const append_AcceptCrit = (input_data) => {
    README_String = `
## General Project Acceptance Critieria
${input_data.acceptance_criteria}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// --------------------------------------------------------------PROMPT CONTRIBUTORS
function prompt_Contributors () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: '\nWhat are the names of your contributors?\n',
            name: 'contributors',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Contributors(input_data));
        });
}
// ---------------------------------------------------------------------------------

// --------------------------------------------------------------APPEND CONTRIBUTORS
const append_Contributors = (input_data) => {
    README_String = `
## Project Contributors
${input_data.contributors}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------PROMPT TESTS
function prompt_Tests () {
    inquirer
        .prompt([
        {
            type: 'input',
            message: '\nWhat is the testing information for your project?\n',
            name: 'contributors',
        },
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_Tests(input_data));
        });
}
// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------APPEND TESTS
const append_Tests = (input_data) => {
    README_String = `
## Project Testing Information
${input_data.tests}    

`;
return README_String;
}
// ---------------------------------------------------------------------------------

// -------------------------------------------------------------------PROMPT LICENSE
function prompt_License () {
    inquirer
        .prompt([
        {
            type: 'list',
            message: '\nWhich of the following licenses do you wish to use?\n',
            name: 'licenses',
            choices: ["MIT", "Unlicense"],
            default: "MIT"
        }
        ])
        .then((input_data) => {
            fs.appendFileSync('README.md', append_License(input_data));
        });
}  
// --------------------------------------------------------------------------------- 

// -------------------------------------------------------------------APPEND LICENSE
function append_License(input_data) {
switch (input_data.licenses){
    case "MIT":
README_String = `
## License
MIT License

Copyright (c) [2022] [${global_username}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
        
`;
    break;
    case "Unlicense":
README_String = `
## License
The Unlicense License

Copyright (c) [2022] [${global_username}]

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>

`;
    break;
    }
return README_String;
}
// ---------------------------------------------------------------------------------

function conclusion() {
    console.log("\n This concludes the inputs for the auto-generated README. Please see your final file at ./README.md\n")
}

// TODO: Create a function to initialize app
function init() {
    prompt_TOC();
    //Iterates over the global array 'task_list' created in prompt_TOC and runs each appropriate prompt function / write function
    task_list.forEach(element => {
        switch (element) {
        case "Description":
            prompt_Description();
            break;
        case "Assignment Scope":
            prompt_Scope();
            break;
        case "Installation Instructions":
            prompt_Installation();
            break; 
        case "Usage":
            prompt_Usage();
            break;
        case "User Story":
            prompt_UserStory
            break;
        case "Acceptance Criteria":
            prompt_AcceptCrit();
            break;
        case "Contributors":
            prompt_Contributors();
            break;
        case "Tests":
            prompt_Tests();
            break;
        case "License":
            prompt_License();
            break;
        }
    });
    conclusion();
}

// Function call to initialize app
init();