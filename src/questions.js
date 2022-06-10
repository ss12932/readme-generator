const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the title of your project to proceed";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please give a detailed explanation of your project.",
    validate: (answer) => {
      if (!answer) {
        return "Please give an explanation of your project to proceed";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "installation.initialQuestion",
    message: "Do you have installation instructions for your project?",
    choices: ["yes", "no"],
  },
  {
    type: "input",
    name: "installation.firstStep",
    message: "Please enter the first step of your installation instructions",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the first step of your installation instructions";
      }
      return true;
    },
    when(answers) {
      return answers.installation === "yes";
    },
  },
  {
    type: "list",
    name: "installation.secondStepQuestion",
    message: "Do you have installation instructions for your project?",
    choices: ["yes", "no"],
  },
  {
    type: "input",
    name: "installation.secondStep",
    message: "Please enter the second step of your installation instructions",
    validate: (answer) => {
      if (!answer) {
        return "Please enter the second step of your installation instructions";
      }
      return true;
    },
    when(answers) {
      return answers.installation === "yes";
    },
  },
];

module.exports = questions;
