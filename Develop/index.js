const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const promptUser = require("./utils/promptUser.js");

let lorem = {
  title: "README.md Generator",
  questionOne: "this is a answer to question one",
  questionTwo: "this is a answer to question two",
  questionThree: "this is a answer to question three",
  installation: "download and clone the repository to get started",
  usage: "use a command line and enter node index.js",
  credits: "credits go to me",
  features: "create a readme file",
  howToContribute: "i do not accept contributiions",
  licenseConfirm: true,
  license: "MIT",
  tests: "current no writtin tests",
  questions: "email me for questions",
};

function concatDescription(userAnswers) {
  let description =
    userAnswers.questionOne +
    " " +
    userAnswers.questionTwo +
    " " +
    userAnswers.questionThree;

  console.log(description);

  delete userAnswers.questionOne;
  delete userAnswers.questionTwo;
  delete userAnswers.questionThree;

  userAnswers.description = description;

  return userAnswers;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    console.log(err);
    return;
  });
}

// TODO: Create a function to initialize app
function init() {
  //promptUser().then((response) => {
  let formatedResponse = concatDescription(lorem);
  let markdown = generateMarkdown(formatedResponse);
  writeToFile("./dist/README.md", markdown, (error) => {
    console.log("oops");
  });
  //});
}

// Function call to initialize app
init();
