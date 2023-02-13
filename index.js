
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genMD = require('./utils/generateMarkdown');

// 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your  project description?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['APACHE-2.0', 'GPL 3.0' , 'BSD-3', 'MIT', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instruction for your project?',
      },  
      {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to this project?',
      },  
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage instruction for your project?',
      },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname__, fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
