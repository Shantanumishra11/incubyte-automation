const { Given, When, Then } = require('@cucumber/cucumber');
const RegisterPage = require('../pages/RegisterPage');

Given('I am on the registration page', async function () {
  this.registerPage = new RegisterPage(this.page);
  await this.registerPage.goto();
});

When('I register with valid details', async function () {
  User = 'user_01234'; // Fixed username for consistent testing
  await this.registerPage.registerNewUser(User);
});

Then('I should see the success message', async function () {
  await this.page.waitForSelector('p');
  const msg = await this.page.textContent('p');
  console.log('Registration Message:', msg);
});
