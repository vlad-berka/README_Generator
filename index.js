var task_list = ["this", "that", "those"];
var task_list_index = 0;

const inquirer = require('inquirer');
const fs = require('fs');

const generate_README = (input_data) => 
`Hello ${input_data.user_name}

`;

const generate_README2 = (input_data) => `Hello ${input_data.user_name}`;


function do_next_thing(next_task) {
    switch (next_task) {
        case "that" :
            console.log("starting: " +next_task);
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name again?',
                    name: 'user_name',
                }
            ])
            .then((input_data) => {
                console.log("do next thing input data found");
                fs.appendFile('README.md', generate_README2(input_data), (err) => err ? console.error(err) : console.log());
                }
            );
            break;
        case "those" :
            console.log("broken something");
            break;
        }
};

console.log("now running: " +task_list[task_list_index]);
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'user_name',
    }
  ])
  .then((input_data) => {
      task_list_index++;
        fs.writeFile('README.md', generate_README(input_data), (err) => err ? console.error(err): do_next_thing(task_list[task_list_index]));
        }
  );