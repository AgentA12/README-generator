const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const promptUser = require("./utils/promptUser.js");

let lorem = {
  title: "f",
  installation: "f",
  usage: "f",
  credits: "f",
  features: "f",
  howToContribute: "f",
  licenseConfirm: true,
  license: "Apache",
  tests: "y",
  confirmQuestions: true,
  questionsEmail: "df",
  questionsGithub: "df",
  questionOne: "question answer",
  questionTwo: "anwser",
  questionThree: "the anwsers",
};
function concatDescription(userAnswers) {
  let description =
    userAnswers.questionOne +
    " " +
    userAnswers.questionTwo +
    " " +
    userAnswers.questionThree;

  delete userAnswers.questionOne;
  delete userAnswers.questionTwo;
  delete userAnswers.questionThree;

  userAnswers.description = description;

  return userAnswers;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  //promptUser().then((response) => {
  let formatedResponse = concatDescription(lorem);

  let markdown = generateMarkdown(formatedResponse);

  writeToFile("./dist/README.md", markdown);
  //});
}
// Function call to initialize app
init();
