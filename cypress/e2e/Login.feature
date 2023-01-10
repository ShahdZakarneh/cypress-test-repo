Feature: Login
    I want to log in to Conduit

    Scenario: Conduit Login
        Given I open Conduit Login page
        When I type the email and password
        And click on Sign in button
        Then Your Feed should be shown


