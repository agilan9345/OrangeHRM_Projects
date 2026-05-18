const { expect } = require('@playwright/test');

class PimPages {
    constructor(page) {
        this.page = page;
    }

    async openPimPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    }

    async clickAddUEmployee() {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await expect(this.page).toHaveURL(/addEmployee/);
    }

    async setUserNames() {
        await this.page.getByPlaceholder('First Name').fill('Raja');
        await this.page.getByPlaceholder('Middle Name').fill('Mani');
        await this.page.getByPlaceholder('Last Name').fill('R');
    }

    async addEmployeeID() {
        const empIdField = this.page.locator('input.oxd-input').nth(4);
        await empIdField.fill('9297427');
    }

    async clickSaveBtn() {
        
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async waitForPersonalDetailsPage() {
        await this.page.waitForURL(/viewPersonalDetails/);
    }

    async checkNames() {
        await expect(this.page.getByPlaceholder('First Name')).toHaveValue('Raja');
        await expect(this.page.getByPlaceholder('Middle Name')).toHaveValue('Mani');
        await expect(this.page.getByPlaceholder('Last Name')).toHaveValue('R');
    }

    async otherDriveLicienceAndDate() {
        await this.page.locator('input.oxd-input').nth(5).toContainText('9297429'); // Other ID
        await this.page.locator('input.oxd-input').nth(6).fill('264626864362'); // License

        await this.page.locator('input[placeholder="yyyy-mm-dd"]').first().fill('2009-06-21');
    }

    async basicStatus() {
        // Nationality
        await this.page.locator('.oxd-select-text').nth(0).click();
        await this.page.getByRole('option', { name: 'Indian' }).click();

        // Marital Status
        await this.page.locator('.oxd-select-text').nth(1).click();
        await this.page.getByRole('option', { name: 'Single' }).click();
    }

    async dobAndGender() {
        await this.page.locator('input[placeholder="yyyy-mm-dd"]').nth(1).fill('2003-07-24');

        await this.page.getByLabel('Male').check();
    }
}

module.exports = { PimPages };