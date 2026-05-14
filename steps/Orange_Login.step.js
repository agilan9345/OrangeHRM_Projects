const { Given, When, Then } = require('@cucumber/cucumber');
const{OrangeLoginPage} = require('../pages/Orange_Login.page');


Given('user is on the login page', async function () {
    this.orangeloginpage = new OrangeLoginPage(this.page);
    await this.orangeloginpage.openOrangePage();
  
});

When('user enters the username {string}', async function (value) {
    await this.orangeloginpage.enterUserName(value);
});

When('user enters the password {string}', async function (value) {
    await this.orangeloginpage.enterPassword(value)
});

When('user clicks the login button', async function () {
    await this.orangeloginpage.clickLoginButton();

});

Then('user should see the error message {string}', async function (errormessage) {
    if(errormessage === "Required"){
    await this.orangeloginpage.validateRequired(errormessage);
    }
    else{
        await this.orangeloginpage.validateInvalidCredentials(errormessage);
    }
 
});


Then('user should be navigated to the admin page', async function () {
    await this.orangeloginpage.successNavigation();
 
});