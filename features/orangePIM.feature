Feature: PIM Functionality

    Background:
        Given user is on the login page
        When user enters the username "Admin"
        And user enters the password "admin123"
        And user clicks the login button
        Then user should be navigated to the admin page

@personal_Information

    Scenario: Add user PIM information
        Given user on employee list page
        When user click the Pim button and navigate to pim page
        When user click the add user button
        Then user navigate to the add employee page
        And user enter the first name 
        And user enter the middle name
        And user enter the last name
        And user enter the employee Id
        And user click the save button 
        And user navigate to the view person details

    
    