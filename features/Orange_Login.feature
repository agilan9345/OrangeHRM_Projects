Feature: Login Functionality

@orangePositive
  Scenario Outline: Validate the valid login functionality in OrangeHRM
    Given user is on the login page
    When user enters the username "<username>"
    And user enters the password "<password>"
    And user clicks the login button
    Then user should be navigated to the admin page

    Examples:
      | username | password |
      | Admin    | admin123 |

@orangeNegative 

  Scenario Outline: Validate the invalid login functionality in OrangeHRM
    Given user is on the login page
    When user enters the username "<username>"
    And user enters the password "<password>"
    And user clicks the login button
    Then user should see the error message "<errormessage>"

    Examples:
      | username | password  | errormessage        |
      | Admin    |           | Required            |
      |          | admin123  | Required            |
      |          |           | Required            |
      | Admin    | admin12   | Invalid credentials |