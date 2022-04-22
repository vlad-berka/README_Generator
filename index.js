var task_list = [];
var index_count = 0;

const inquirer = require('inquirer');
const fs = require('fs');

const generate_README = (input_data) => 
`# ${input_data.proj_name}
(Autogenerated README Written by ${input_data.user_name})

## Table of Contents
- [Description](#descr)
- [Assignment Scope](#scope)
- [Installation Instructions](#inst)
- [Usage](#usage)
- [User Story](#userStory)
- [Acceptance Criteria](#accCrit)
- [Contributors](#contr)
- [License](#lisc)

## Assignment Description


`;

const generate_README2 = (input_data) => `Hello ${input_data.user_name}`;

function prompt_TOC () {
    console.clear();
    console.log("\n\n Welcome to the README Autogenerator!\nLet us begin by selecting which sections you would like to include in your README file.\n");
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: 'What languages do you know?',
                name: 'listOfTasks',
                choices: ['Description', 'Assignment Scope', 'Installation Instructions', 'Usage', 'User Story', "Acceptance Criteria", 'Contributors', 'License'],
            }
        ])
        .then((input_data) => {
            console.log(input_data.listOfTasks[0]);
            console.clear();
        });
}

prompt_TOC ();

// inquirer
//   .prompt([
//     {
//         type: 'input',
//         message: 'Welcome to the README AutoGenerator. What is your full name?\n',
//         name: 'user_name',
//     },
//     {
//         type: 'input',
//         message: 'What is the name of your project?\n',
//         name: 'proj_name',
//     },
//     {
//         type: 'input',
//         message: 'What is the description for your project?\n',
//         name: 'description',
//     },
//     {
//         type: 'input',
//         message: 'What is the scope for your project?\n',
//         name: 'scope',
//     },
//     {
//         type: 'input',
//         message: 'What are the installation instructions for your project?\n',
//         name: 'installation',
//     },
//     {
//         type: 'input',
//         message: 'How is this project going to be used?\n',
//         name: 'usage',
//     },
//     {
//         type: 'input',
//         message: 'What is the user story for this project?\n',
//         name: 'user_story',
//     },
//     {
//         type: 'input',
//         message: 'What is the acceptance criteria for this project?\n',
//         name: 'acceptance_criteria',
//     },
//     {
//         type: 'input',
//         message: 'What are the names of your contributors?\n',
//         name: 'contributors',
//     },
//     {
//         type: 'list',
//         message: 'Which of the following licenses do you wish to use?\n',
//         name: 'licenses',
//         choices: ["MIT", "LIC"],
//         default: "MIT"
//     }
//   ])
//   .then((input_data) => {
//         fs.writeFileSync('README.md', generate_README(input_data), (err) => err ? console.error(err): do_next_thing(task_list[task_list_index]));
//         checkLic(input_data);
//         }
//   );
    
// // The automated loop that will iterate over all items to add into the README
// // while (index_count < task_list.length) {
// //     do_next_thing(task_list[index_count]);
// // }

// // The switch case to move onto the next task - interrupting the async nature of inquirer's prompt-then
// function do_next_thing(task) {
//     switch (task) {
//         case "Description" :
//             index_count++;
//             console.log("doing the first thing");
//             break;
//         case "Table of Contents" :
//             index_count++;
//             console.log("doing the second? thing");
//             break;
//         case "Installation" :
//             index_count++;
//             console.log("doing the third thing");
//             break;
//         case "Usage" :
//             index_count++;
//             console.log("doing the fourth thing");
//             break;
//         case "License" :
//             index_count++;
//             console.log("doing the fifth thing");
//             break;
//         case "Contributing" :
//             index_count++;
//             console.log("doing the fifth thing");
//             break;
//         case "Tests" :
//             index_count++;
//             console.log("doing the fifth thing");
//             break;
//         case "Questions" :
//             index_count++;
//             console.log("doing the fifth thing");
//             break;
//         default :
//             index_count++
//             console.log("something broke");
//             checkLic();
//             break;
//     }
//     console.log(input_data);
// }  

function write_TableOfContents (input_data) {
    console.log("Writing table of contents");
}

function checkLic (input_data) {
    if(input_data.licenses) {
        console.log("licenses are found");
    }
}