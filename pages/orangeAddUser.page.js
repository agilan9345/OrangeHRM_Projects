const { expect } = require('@playwright/test');

class AddUserPage {
    constructor(page) {
        this.page = page;
    }

    async openAdminPage() {
        await this.page.getByRole('link', { name: 'Admin' }).click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }

    async clickAddUser() {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
    }

    async selectOptionUserRole() {
        await this.page.locator('.oxd-select-text-input').nth(1).click();
        await this.page.getByText('ESS').click();
    }

    async enterEmployeeName() {
        await this.page.locator('input[placeholder="Type for hints..."]').fill('Trần Thị Mỹ Diệu');
        await this.page.waitForSelector('.oxd-autocomplete-option'); // wait for suggestions
        await this.page.locator('.oxd-autocomplete-option').first().click(); // click first suggestion
    }

    async selectStatus() {
        await this.page.locator('.oxd-select-text-input').nth(1).click();
        await this.page.getByText('Enabled').click();
    }

    async enterUsername() {
        await this.page.locator('input.oxd-input--active').nth(1).fill('agilanmunisamy');
    }

    async enterPassword() {
        await this.page.locator('input[type="password"]').nth(0).fill('Agilan@123');


    }

    async enterConfirmPassword() {
        await this.page.locator('input[type="password"]').nth(1).fill('Agilan@123');


    }

    async clickSave() {
        await this.page.getByText('Save').click();
    }


    async afterNav(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }


}
module.exports = { AddUserPage };