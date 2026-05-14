const { Given, When, Then } = require("@cucumber/cucumber");
const{AddUserPage} = require('../pages/orangeAddUser.page');

Given('user on the admin page', async function () {
    this.adduserpage = new AddUserPage(this.page);
    await this.adduserpage.openAdminPage();

});



Given('user should click the add user',async function () {
    await this.adduserpage.clickAddUser();

});


Given('user should select the user role', async function () {
    await this.adduserpage.selectOptionUserRole();

});



Given('user should select the employee name',async function () {
    await this.adduserpage.enterEmployeeName();

});


Given('user should select the status',async function () {
    await this.adduserpage.selectStatus();

});


Given('user should enter the username',async function () {
    await this.adduserpage.enterUsername();

});


Given('user should enter the password',async function () {
    await this.adduserpage.enterPassword();

});



Given('user should enter the confirm password',async function () {
    await this.adduserpage.enterConfirmPassword();

});



Given('user click the save button to save state',async function () {
    await this.adduserpage.clickSave();

});

Then('user navigate to the view system page',async function () {
   await this.adduserpage.afterNav();

});

