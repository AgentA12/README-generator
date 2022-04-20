const licenses = [
  {
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    Boost:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    MPL: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(markdownData) {
  if (!markdownData.license) return "";
  for (i = 0; i < licenses.length; i++) {
    if (licenses[i][markdownData.license]) {
      return "- " + licenses[i][markdownData.license];
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  for (i = 0; i < licenses.length; i++) {
    if (licenses[i][license]) {
      return `[${licenses[i]["link"]}](${licenses[i]["link"]})`;
    }
  }
}

function renderLicenseMdLink(license) {
  if (!license) return "";
  return `- [License](#License-Notice)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data.license) return "";

  return `
  ## License Notice

  This project is license under ${data.license} see:
  `;
}

function questionsFunc(answerData) {
  if (!answerData.confirmQuestions) return "";

  return `
  ## Questions 

  If there are any further questions you can reach me at: ${answerData.questionsEmail}  
  See my github: [https://github.com/${answerData.questionsGithub}?tab=repositories](https://github.com/${answerData.questionsGithub}?tab=repositories)
  `;
}

function includeLink(data) {
  if (!data.confirmQuestions) return "";
  return "- [Questions](#Questions)";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data.license);
  //data.license = renderLicenseBadge(data.license);
  return `# ${data.title}  ${renderLicenseBadge(data)} 
 
  ***

  ## Project Description 

  ${data.description}

  ## Table Of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Features](#Features)
  - [How-To-Contribute](#Contributing)
  - [Tests](#Tests)
  ${includeLink(data)}
  ${renderLicenseMdLink(data.license)}

  ## Installation 
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage 
  \`\`\`
  ${data.usage}
  \`\`\`
  ## Features

  ${data.features}

  ## Credits

  ${data.credits}

  ## Contributing

  ${data.howToContribute}
 
  ## Tests

  ${data.tests}

  ${questionsFunc(data)}
  ${renderLicenseSection(data)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
