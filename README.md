# Incubyte Assesment- Automation (Playwright + Cucumber + POM)

This repository automates the sign-up and login flow for [Parabank](https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC).  
It uses **Playwright** with **Cucumber (BDD)** and **Page Object Model (POM)** structure.

## Features Implemented
- **Register** a new Parabank account.
- **Login** with that account.
- **Capture and print the account balance** after login.

## Project Structure
```
parabank-automation/
  pages/               # Page Object Model classes
  tests/features/      # BDD feature files
  tests/steps/         # Step definitions
  package.json         # Dependencies
  proof/               # Screen recording of test run
  TestCases.xlsx       # Excel file with documented test cases
  cucumber.js          # Cucumber configuration

```


## Setup

1. Clone the repository:
```bash
git clone https://github.com/Shantanumishra11/incubyte-automation
cd parabank-automation
```

2. Install dependencies:
```bash
npm install
```
3. Install Playwright browsers if not already installed:
```bash
npx playwright install
```

4. Run the tests:
```bash
  npx cucumber-js --tags @register  #for registration flow
  npx cucumber-js --tags @login     #for login flow
```

This will:
- Register a new user (with static username).
- Log in with that user.
- Print the account balance to the console.

## Technologies Used (with version)
- Playwright -> Version 1.55.1
- Cucumber.js -> 9.6.0
- Node.js -> v24.9.0


## BDD + POM
- **BDD**: Feature files describe scenarios in Gherkin.
- **POM**: All page selectors and methods are in `/pages` folder.

## References
- Parabank site: [https://parabank.parasoft.com](https://parabank.parasoft.com)
