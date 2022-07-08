const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (answer) => {
      if (!answer) {
        return 'Please enter the title of your project to proceed';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: (answers) =>
      `Please give a detailed explanation for ${answers.title}.`,
    validate: (answer) => {
      if (!answer) {
        return 'Please give an explanation of your project to proceed';
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'installation.initialQuestion',
    message: 'Do you have installation instructions for your project?',
    choices: ['yes', 'no'],
    filter: (answer) => {
      if (answer === 'no') {
        return 'none';
      }
      return answer;
    },
  },
  {
    type: 'input',
    name: 'installation.instructions',
    message: 'Please enter your installation instructions',
    validate: (answer) => {
      if (!answer) {
        return 'Please enter your installation instructions';
      }
      return true;
    },
    when(answers) {
      return answers.installation.initialQuestion === 'yes';
    },
  },
  {
    type: 'list',
    name: 'usage.initialQuestion',
    message: 'Do you have usage instructions for your project?',
    choices: ['yes', 'no'],
    filter: (answer) => {
      if (answer === 'no') {
        return 'none';
      }
      return answer;
    },
  },
  {
    type: 'input',
    name: 'usage.instructions',
    message: 'Please enter your usage instructions',
    validate: (answer) => {
      if (!answer) {
        return 'Please enter your usage instructions';
      }
      return true;
    },
    when(answers) {
      return answers.usage.initialQuestion === 'yes';
    },
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select one of the following licenses for your project',
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      "BSD2-Clause 'Simplified License'",
      "BSD-3-Clause 'New' or 'Revised' License",
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense',
    ],
    validate: (answer) => {
      if (answer.length < 1) {
        return 'Please select a license to proceed';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'contributions',
    message:
      'Please list any rules/guidelines for contributing to this project',
  },
  {
    type: 'list',
    name: 'test.initialQuestion',
    message: 'Do you have test instructions for your project?',
    choices: ['yes', 'no'],
    filter: (answer) => {
      if (answer === 'no') {
        return 'none';
      }
      return answer;
    },
  },
  {
    type: 'input',
    name: 'test.instructions',
    message: 'Please enter your test instructions',
    validate: (answer) => {
      if (!answer) {
        return 'Please enter your test instructions';
      }
      return true;
    },
    when(answers) {
      return answers.test.initialQuestion === 'yes';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter an email address so someone can reach you',
    validate: (answer) => {
      if (!answer) {
        return 'Please enter an email address to proceed';
      }
      return true;
    },
  },
];

module.exports = questions;
