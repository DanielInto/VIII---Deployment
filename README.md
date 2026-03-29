Project purpose:
This repository contains unit tests for a provided JavaScript library. Tests are written using Mocha and Chai, and coverage is measured with NYC and reported to Coveralls.

Repository contents:

src/ – source files of the library (not modified)
test/ – unit tests for selected files
.github/workflows/ – GitHub Actions workflow for running tests and sending coverage reports
.gitignore – excludes node_modules, coverage files, and internal files from Git

Testing:

Unit tests are run with npm test
Coverage reports can be generated with npm run coverage
Coveralls integration is configured via GitHub Actions

Coverage and Results:

Badge: [![Coverage Status](https://coveralls.io/repos/github/DanielInto/VIII---Deployment/badge.svg?branch=main)](https://coveralls.io/github/DanielInto/VIII---Deployment?branch=main)


Approach and configuration
Test results and coverage details
Issue reports and production readiness assessment

How to run tests locally:

npm install
npm test
npm run coverage
