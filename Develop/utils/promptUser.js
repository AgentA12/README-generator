const inquirer = require("inquirer");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "questionOne",
      message: "Why did you build the project?",
    },
    {
      type: "input",
      name: "questionTwo",
      message: "What problem does it solve",
    },
    {
      type: "input",
      name: "questionThree",
      message: "What did you learn?",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide instructions on how to install your project",
    },

    {
      type: "input",
      name: "usage",
      message: "Explain how to use your project",
    },

    {
      type: "input",
      name: "credits",
      message:
        "List your collaborators and who you would like to give credits to",
    },

    {
      type: "input",
      name: "features",
      message: "What are some features of the project",
    },

    {
      type: "input",
      name: "howToContribute",
      message: "How does someone contribute to the project?",
    },
    {
      type: "confirm",
      name: "licenseConfirm",
      message: "Would you like to add a license?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license",
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
      name: "tests",
      message: "Give examples of the tests included in your project",
    },
    {
      type: "confirm",
      name: "confirmQuestions",
      message:
        "Would you like to enter your email and gitHub for user questions?",
    },
    {
      type: "input",
      name: "questionsEmail",
      message: "Enter your email",
      when: ({ confirmQuestions }) => {
        if (confirmQuestions) {
          return true;
        } else return false;
      },
      validate: (questionsEmail) => {
        if (questionsEmail) {
          return true;
        } else {
          console.log("Please your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questionsGithub",
      message: "Enter your github",
      when: ({ confirmQuestions }) => {
        if (confirmQuestions) {
          return true;
        } else return false;
      },
      validate: (questionGithub) => {
        if (questionGithub) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
  ]);
}

module.exports = promptUser;
