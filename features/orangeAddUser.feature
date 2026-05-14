Feature: Admin Functionality

    Background:
        Given user is on the login page
        When user enters the username "Admin"
        And user enters the password "admin123"
        And user clicks the login button
        Then user should be navigated to the admin page

    @admin

    Scenario: Add new User admin in user page

        Given user on the admin page
        When user should click the add user
        And user should select the user role
        And user should select the employee name
        And user should select the status
        And user should enter the username
        And user should enter the password
        And user should enter the confirm password
        And user click the save button to save state
        Then user navigate to the view system page
