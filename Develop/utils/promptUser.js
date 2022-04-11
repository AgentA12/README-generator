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
  { license: "Would you like to include a license?" },
  { tests: "give examples of your tests" },
  { questions: "what are some common questions you get about your project" },
];

const licenses = [
  {
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    Boost:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    MPL: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
];

function promptUser() {
  return inquirer
    .prompt([
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
        type: "confirm",
        name: "licenseConfirm",
        message: "Would you like to add a license?",
      },
      {
        type: "list",
        name: Object.keys(questions[7]),
        message: `${questions[7].license}`,
        choices: ["Apache", "Boost", "BSD", "MIT", "GNU", "MPL"],
        when: ({ licenseConfirm }) => {
          if (licenseConfirm) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: Object.keys(questions[8]),
        message: `${questions[8].tests}`,
      },
      {
        type: "input",
        name: Object.keys(questions[9]),
        message: `${questions[9].questions}`,
      },
    ])
    .then((response) => {
      console.log(response);
    });
}

module.exports = promptUser;
