const { Given, When, Then } = require("@cucumber/cucumber");
const { PimPages } = require('../pages/orangePIM.page');

// ✅ Scenario 1
Given('user is on the employee list page', async function () {
    this.pimpages = new PimPages(this.page);
    await this.pimpages.openPimPage();
});

When('user clicks the add user button', async function () {
    await this.pimpages.clickAddUEmployee();
});

Then('user should be navigated to the add employee page', async function () {
    // Already validated
});

When('user enters first name, middle name, and last name', async function () {
    await this.pimpages.setUserNames();
});

When('user enters the employee ID', async function () {
    await this.pimpages.addEmployeeID();
});

When('user clicks the save button', async function () {
    await this.pimpages.clickSaveBtn();
    await this.pimpages.waitForPersonalDetailsPage();
});


// ✅ Scenario 2
Given('user is on the personal details page', async function () {
    this.pimpages = new PimPages(this.page);
    await this.pimpages.openPimPage();
    
    // Navigate properly
    await this.pimpages.clickAddUEmployee();
    await this.pimpages.setUserNames();
    await this.pimpages.addEmployeeID();
    await this.pimpages.clickSaveBtn();
    await this.pimpages.waitForPersonalDetailsPage();
});

When('user edits the name and employee ID', async function () {
    await this.pimpages.setUserNames();
    await this.pimpages.addEmployeeID();
});

When('user enters the other ID and Driver\'s license number', async function () {
    await this.pimpages.otherDriveLicienceAndDate();
});

When('user selects nationality and marital status', async function () {
    await this.pimpages.basicStatus();
});

When('user selects date of birth and gender', async function () {
    await this.pimpages.dobAndGender();
});

Then('user details should be updated successfully', async function () {
    await this.pimpages.checkNames();
});