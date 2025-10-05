class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
  }

  async registerNewUser(username) {
    await this.page.fill('input[name="customer.firstName"]', 'Test');
    await this.page.fill('input[name="customer.lastName"]', 'User');
    await this.page.fill('input[name="customer.address.street"]', '123 St');
    await this.page.fill('input[name="customer.address.city"]', 'City');
    await this.page.fill('input[name="customer.address.state"]', 'State');
    await this.page.fill('input[name="customer.address.zipCode"]', '12345');
    await this.page.fill('input[name="customer.phoneNumber"]', '1234567890');
    await this.page.fill('input[name="customer.ssn"]', '111-22-3333');
    await this.page.fill('input[name="customer.username"]', username);
    await this.page.fill('input[name="customer.password"]', 'Test@123');
    await this.page.fill('input[name="repeatedPassword"]', 'Test@123');
    await this.page.click('input[value="Register"]');
  }
}

module.exports = RegisterPage;
