const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');

Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('I log in with valid credentials', async function () {
  await this.loginPage.login('user_01234', 'Test@123');
});

Then('I should see the accounts overview page', async function () {
  await this.page.waitForSelector('h1.title');
});

Then('I log the account balance', { timeout: 20000 }, async function () {
  // wait until the table appears
  await this.page.waitForSelector('table tbody tr:first-child td:nth-child(2)', { timeout: 15000 });
  const balance = await this.loginPage.getFirstAccountBalance();
  console.log('Account Balance:', balance);
});

