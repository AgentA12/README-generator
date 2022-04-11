// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ${data.license}

  ***

  ## Description Of Project

  ${data.description}

  ## table of contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Features](#Features)
  - [How-To-Contribute](#How-to-Contribute)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation Guide

  ${data.installation}

  ## How To Use 

  ${data.usage}

  ## Features

  ${data.features}

  ## Credits

  ${data.credits}

  ## How To Contribute

  ${data.howToContribute}

  ## license

  ${data.license}

  ## Tests

  ${data.tests}

  ### Questions

  ${data.questions}
`;
}

module.exports = generateMarkdown;
