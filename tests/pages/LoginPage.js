class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('input[value="Log In"]');
  }

  async getFirstAccountBalance() {
  // optionally still wait here too
  await this.page.waitForSelector('table tbody tr:first-child td:nth-child(2)');
  return this.page.textContent('table tbody tr:first-child td:nth-child(2)');
}

}

module.exports = LoginPage;
