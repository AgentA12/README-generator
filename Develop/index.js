const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const promptUser = require("./utils/promptUser.js");

function concatDescription(userAnswers) {
  let description =
    userAnswers.questionOne +
    userAnswers.questionTwo +
    userAnswers.questionThree;

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
  promptUser().then((response) => {
    let formatedResponse = concatDescription(response);
    let markdown = generateMarkdown(formatedResponse);
    writeToFile("./dist/README.md", markdown, (error) => {
      console.log("oops");
    });
  });

  // .then((anwsered) => {
  //   console.log(anwsered.title);
  //   writeToFile("./dist/README.md", anwsered);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

// Function call to initialize app
init();
