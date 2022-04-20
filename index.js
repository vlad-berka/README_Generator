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
        message: 'What is your name?',
        name: 'user_name',
    }
  ])
  .then((input_data) => {
        fs.writeFile('README.md', generate_README(input_data), (err) => err ? console.error(err): do_next_thing(task_list[task_list_index]));
        }
  );
    
// The automated loop that will iterate over all items to add into the README
while (index_count < task_list.length) {
    do_next_thing(task_list[index_count]);
}

// The switch case to move onto the next task - interrupting the async nature of inquirer's prompt-then
function do_next_thing(task) {
    switch (task) {
        case "first" :
            index_count++;
            console.log("doing the first thing");
            break;
        case "second" :
            index_count++;
            console.log("doing the second? thing");
            break;
        case "third" :
            index_count++;
            console.log("doing the third thing");
            break;
        case "fourth" :
            index_count++;
            console.log("doing the fourth thing");
            break;
        case "fifth" :
            index_count++;
            console.log("doing the fifth thing");
            break;
        default :
            index_count++
            console.log("something broke");
            break;
    }
}  