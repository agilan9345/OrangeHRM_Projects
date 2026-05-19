const { Given, When, Then } = require('@cucumber/cucumber');
const { RecruitmentPages } = require('../pages/Orange_Recruitment.page');


Given('user is on the recruitment page', async function () {
    this.recruitmentpages = new RecruitmentPages(this.page);
    await this.recruitmentpages.navigateToRecruitment();
});

When('user clicks the add candidate button', async function () {
    await this.recruitmentpages.clickAddCandidate();
});

When('user enters name of the candidate', async function () {
    await this.recruitmentpages.setCandidateDetails();
});

When('user selects a vacancy from the dropdown', async function () {
    await this.recruitmentpages.setVacancy();
});

When('user enters email and contact number', async function () {
    await this.recruitmentpages.setEmailAndContact();
});

When('user uploads a resume', async function () {
    await this.recruitmentpages.uploadResume();
});

When('user enters keywords', async function () {
    await this.recruitmentpages.enterKeywords();
});

When('user sets the date of application', async function () {
    await this.recruitmentpages.setDateOfApplication();
});

When('user clicks the save button to save the employee credentials', async function () {
    await this.recruitmentpages.clickSaveBtn();
});
