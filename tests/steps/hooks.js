const { Before, After, setWorldConstructor,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60000);

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.randomUser = null;
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
