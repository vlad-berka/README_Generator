const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'user_name',
    }
  ])
  .then((user_input) => {
    var final_README_string = "";

    final_README_string += `<h1> Hello ${user_input.username}`;

    fs.writeFile('README.md', final_README_string, (err) => err ? console.error(err) : console.log('Success writing file to "README.md"!'));
    }
  );
