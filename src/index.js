const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const questions = require('./questions');
const generateMarkdown = require('./generateMarkdown');

function writeToFile(fileName, data) {
  return fs.writeFile(
    path.join(__dirname, `../${fileName}`),
    generateMarkdown(data),
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`You have successfully written file to ${fileName}`);
    }
  );
}

async function init() {
  const awaitPrompt = await inquirer.prompt(questions);
  console.log(awaitPrompt);
  writeToFile('GEN_README.md', awaitPrompt);
}

// Function call to initialize app
init();
