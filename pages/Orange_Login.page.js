const { expect } = require("@playwright/test");

class OrangeLoginPage {
  constructor(page) {
    this.page = page;

    this.userName = page.locator('input[placeholder="Username"]');
    this.passWord = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"]');
   this.requiredFiled = page.locator('//span[text()="Required"]');
    this.invalidCredentials = page.locator("//p[normalize-space()='Invalid credentials']");
  }

  async openOrangePage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async enterUserName(value) {
    await this.userName.fill(value);
  }

  async enterPassword(value) {
    await this.passWord.fill(value);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  // ✅ FIXED
  async validateRequired(text) {
    await expect(this.requiredFiled).toContainText(text);
  }

  // ✅ FIXED
  async validateInvalidCredentials(text) {
    await expect(this.invalidCredentials).toContainText(text);
  }

  async successNavigation() {
    await expect(this.page).toHaveURL(
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    );
  }
}

module.exports = { OrangeLoginPage };