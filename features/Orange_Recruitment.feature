Feature: Admin Functionality

  Background:
    Given user is on the login page
    When user enters the username "Admin"
    And user enters the password "admin123"
    And user clicks the login button
    Then user should be navigated to the admin page

  @rectuitmentPositive
  Scenario: Add user for recruitment valid data

    Given user is on the recruitment page
    When user clicks the add candidate button
    And user enters name of the candidate
    And user selects a vacancy from the dropdown
    And user enters email and contact number
    And user uploads a resume
    And user enters keywords
    And user sets the date of application
   # And user sets a notes in page
    And user clicks the save button to save the employee credentials