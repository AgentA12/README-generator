const inquirer = require("inquirer");

const questions = [
  { title: "What is the name of your project?" },
  (description = [
    { questionOne: "Why did you build the project?" },
    { questionTwo: "What problem does it solve" },
    { questionThree: "What did you learn?" },
  ]),
  { installation: "Provide instructions on how to install your project" },
  { usage: "Explain how to use your project" },
  { credits: "List your collaborators" },
  { features: "list the features of the project" },
  { howToContribute: "How does someone contribute?" },
  { license: "Include a license" },
  { tests: "give examples of your tests" },
];

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: Object.keys(questions[0]),
      message: `${questions[0].title}`,
    },

    {
      type: "input",
      name: Object.keys(questions[1][0]),
      message: `${questions[1][0].questionOne}`,
    },
    {
      type: "input",
      name: Object.keys(questions[1][1]),
      message: `${questions[1][1].questionTwo}`,
    },
    {
      type: "input",
      name: Object.keys(questions[1][2]),
      message: `${questions[1][2].questionThree}`,
    },
    {
      type: "input",
      name: Object.keys(questions[2]),
      message: `${questions[2].installation}`,
    },

    {
      type: "input",
      name: Object.keys(questions[3]),
      message: `${questions[3].usage}`,
    },

    {
      type: "input",
      name: Object.keys(questions[4]),
      message: `${questions[4].credits}`,
    },

    {
      type: "input",
      name: Object.keys(questions[5]),
      message: `${questions[5].features}`,
    },

    {
      type: "input",
      name: Object.keys(questions[6]),
      message: `${questions[6].howToContribute}`,
    },

    {
      type: "input",
      name: Object.keys(questions[7]),
      message: `${questions[7].license}`,
    },
    {
      type: "input",
      name: Object.keys(questions[8]),
      message: `${questions[8].tests}`,
    },
  ]);
}

module.exports = promptUser;
