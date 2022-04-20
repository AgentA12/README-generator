const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const promptUser = require("./utils/promptUser.js");

//writes html markup to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then((formattedData) => {
      return generateMarkdown(formattedData);
    })
    .then((markdown) => {
      writeToFile("./dist/README.md", markdown);
    });
}

// Function call to initialize app
init();
