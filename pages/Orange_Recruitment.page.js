const { expect } = require('@playwright/test');
const path = require('path');

class RecruitmentPages {
    constructor(page) {
        this.page = page;
    }

    async navigateToRecruitment() {
        await this.page.getByRole('link', { name: 'Recruitment' }).click();
        await expect(this.page).toHaveURL(/recruitment/);
    }

    async clickAddCandidate() {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await expect(this.page).toHaveURL(/addCandidate/);
    }

    async setCandidateDetails() {
        await this.page.getByPlaceholder('First Name').fill('Agilan');
        await this.page.getByPlaceholder('Middle Name').fill('Raja');
        await this.page.getByPlaceholder('Last Name').fill('M');
    }

    async setVacancy() {
        await this.page.locator('.oxd-select-text').nth(0).click();
        await this.page.getByRole('option', { name: 'Software Engineer' }).click();
    }

    async setEmailAndContact() {
        await this.page.getByPlaceholder('Type here').nth(0).fill('agilanMunisamy2003@gmail.com');
        await this.page.getByPlaceholder('Type here').nth(1).fill('9876543210');
    }

    async uploadResume() {
        const filePath = path.resolve("C:/Users/amunisam/OneDrive - Capgemini/Desktop/Resume/Roll No 21IT6301.pdf");
        await this.page.setInputFiles('input[type="file"]', filePath);
    }

    async enterKeywords() {
        await this.page.getByPlaceholder('Enter comma seperated words...')
            .fill('Software Engineer, Java, Selenium');
    }

    async setDateOfApplication() {
        await this.page.getByPlaceholder('yyyy-dd-mm').fill('2024-06-21');
    }

    // async addNotes() {
    //     await this.page.locator('.oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical')
    //         .fill('This candidate has strong technical skills and relevant experience in software development.');

    // }

    async clickSaveBtn() {
        await this.page.getByRole('button', { name: 'Save' }).click();

        // Success validation
        await expect(this.page.locator('.oxd-toast-content'))
            .toContainText('Success');
    }
}

module.exports = { RecruitmentPages };