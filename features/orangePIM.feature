Feature: PIM Functionality

Background:
    Given user is on the login page
    When user enters the username "Admin"
    And user enters the password "admin123"
    And user clicks the login button
    Then user should be navigated to the admin page


@Names_Fields
Scenario: Add user PIM information
    Given user is on the employee list page
    When user clicks the add user button
    Then user should be navigated to the add employee page
    When user enters first name, middle name, and last name
    And user enters the employee ID
    And user clicks the save button


@Personal_Information
Scenario: Edit user personal details
    Given user is on the personal details page
    When user edits the name and employee ID
    And user enters the other ID and Driver's license number
    And user selects nationality and marital status
    And user selects date of birth and gender
    Then user details should be updated successfully


