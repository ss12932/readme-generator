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

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## #Description

${data.description}

## Installation

Please follow the instructions below:

${data.installation.instructions}

## Usage

Please follow the instructions below:

${data.usage.instructions}

## License

${data.license}

MIT License

## Contributing

${data.contributions}

## Tests

Please follow the instructions below:

${data.test.instructions}

## Questions

Please contact me on my email: ${data.email}

`;
}

module.exports = generateMarkdown;
