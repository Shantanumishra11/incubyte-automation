@register
Feature: Registration

  Scenario: Successful account registration
    Given I am on the registration page
    When I register with valid details
    Then I should see the success message
