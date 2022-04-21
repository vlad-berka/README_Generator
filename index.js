var task_list = ["this", "that", "those"];
var index_count = 0;

const inquirer = require('inquirer');
const fs = require('fs');

const generate_README = (input_data) => 
`Hello ${input_data.user_name}

`;

const generate_README2 = (input_data) => `Hello ${input_data.user_name}`;

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?\n',
        name: 'proj_name',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?\n',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is this project going to be used?\n',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which of the following licenses do you wish to use?\n',
        name: 'licenses',
        choices: ["MIT", "LIC"],
        default: "MIT"
    },
    {
        type: 'input',
        message: 'What are the names of your contributors?\n',
        name: 'contributors',
    },
  ])
  .then((input_data) => {
        fs.writeFileSync('README.md', generate_README(input_data), (err) => err ? console.error(err): do_next_thing(task_list[task_list_index]));
        }
  );
    
// The automated loop that will iterate over all items to add into the README
// while (index_count < task_list.length) {
//     do_next_thing(task_list[index_count]);
// }

// The switch case to move onto the next task - interrupting the async nature of inquirer's prompt-then
function do_next_thing(task) {
    switch (task) {
        case "Description" :
            index_count++;
            console.log("doing the first thing");
            break;
        case "Table of Contents" :
            index_count++;
            console.log("doing the second? thing");
            break;
        case "Installation" :
            index_count++;
            console.log("doing the third thing");
            break;
        case "Usage" :
            index_count++;
            console.log("doing the fourth thing");
            break;
        case "License" :
            index_count++;
            console.log("doing the fifth thing");
            break;
        case "Contributing" :
            index_count++;
            console.log("doing the fifth thing");
            break;
        case "Tests" :
            index_count++;
            console.log("doing the fifth thing");
            break;
        case "Questions" :
            index_count++;
            console.log("doing the fifth thing");
            break;
        default :
            index_count++
            console.log("something broke");
            break;
    }
}  