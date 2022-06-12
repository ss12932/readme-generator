const licenseObj = {
  "Apache License 2.0": {
    badge: "Apache 2.0",
    licenseUrl: "apache-2.0",
  },
  "GNU General Public License v3.0": {
    badge: "GPL v3",
    licenseUrl: "gpl-3.0",
  },
  "MIT License": { badge: "MIT", licenseUrl: "mit" },
  "BSD2-Clause 'Simplified License'": {
    badge: "BSD 2-Clause",
    licenseUrl: "bsd-2-clause",
  },
  "BSD-3-Clause 'New' or 'Revised' License": {
    badge: "BSD 3-Clause",
    licenseUrl: "bsd-3-clause",
  },
  "Boost Software License 1.0": {
    badge: "BSL 1.0",
    licenseUrl: "bsl-1.0",
  },
  "Creative Commons Zero v1.0 Universal": {
    badge: "CC0 1.0",
    licenseUrl: "cc0-1.0",
  },
  "Eclipse Public License 2.0": {
    badge: "EPL 2.0",
    licenseUrl: "epl-2.0",
  },
  "GNU Affero General Public License v3.0": {
    badge: "AGPL v3",
    licenseUrl: "agpl-3.0",
  },
  "GNU General Public License v2.0": {
    badge: "GPL v2",
    licenseUrl: "gpl-2.0",
  },
  "GNU Lesser General Public License v2.1": {
    badge: "LGPL v2.1",
    licenseUrl: "lgpl-2.1",
  },
  "Mozilla Public License 2.0": {
    badge: "MPL 2.0",
    licenseUrl: "mpl-2.0",
  },
  "The Unlicense": {
    badge: "The Unlicense",
    licenseUrl: "unlicense",
  },
};

function renderbadgeLink(license) {
  if (license.length === 0) return "";
  for (const [key, { badge }] of Object.entries(licenseObj)) {
    if (license === key)
      return `https://img.shields.io/static/v1?label=license&message=${badge}&color=green`;
  }
}

function renderLicenseLink(license) {
  if (license.length === 0) return "";
  for (const [key, { licenseUrl }] of Object.entries(licenseObj)) {
    if (license === key)
      return `https://choosealicense.com/licenses/${licenseUrl}`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title} ${renderbadgeLink(data.license)}

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

This Project is licensed under ${
    data.license
  }, for more information please visit: ${renderlicenseUrl(data.license)}

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
