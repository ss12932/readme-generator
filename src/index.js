// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions");
const generateMarkdown = require("./generateMarkdown.js");
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(`../${fileName}`, generateMarkdown(data), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`You have successfully written file to ${fileName}`);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    console.log(answer);
    writeToFile("GEN_README.md", answer);
  });
}

// Function call to initialize app
init();
