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
```


## 🛠️ Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd parabank-automation
```

2. Install dependencies:
```bash
npm install
```

3. Run the tests:
```bash
npx cucumber-js --tags @register  #for registration flow
 npx cucumber-js --tags @login   #for login flow
```

This will:
- Register a new user (with static username).
- Log in with that user.
- Print the account balance to the console.

## Technologies Used
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)

## BDD + POM
- **BDD**: Feature files describe scenarios in Gherkin.
- **POM**: All page selectors and methods are in `/pages` folder.

## References
- Parabank site: [https://parabank.parasoft.com](https://parabank.parasoft.com)
