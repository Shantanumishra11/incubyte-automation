@login
Feature: Login and balance capture

  Scenario: Successful login and balance capture
    Given I am on the login page
    When I log in with valid credentials
    Then I should see the accounts overview page
    And I log the account balance
