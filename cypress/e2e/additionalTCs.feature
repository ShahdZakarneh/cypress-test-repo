Feature: Conduit Website
    adding new testcases for conduit website

    @focus
    Scenario Outline: Sign Up
        Given User Open conduit Sign up page
        Then URL should contains register
        When User type "<username>", "<email>" and "<password>"
        When User click in Sign in button
        Then Home Page will be open
        Examples:
            | username | email          | password |
            | Shahed   | Shahed@zak.com | 1234567  |

    Scenario: Change Username
        When User open Setting page
        When User change to new username
        When User click on Update Settings
        Then The new update should appear

    Scenario: Should show an error message if the password is not correct
        Given The user in sign in page
        When The user type correct email
        When The user type incorrect password
        And The user click Sign in button
        Then email or password is invalid message should appear on screen

    Scenario: Should show an error message if the password and email is empty
        Given The user in sign in page
        When The user click Sign in button
        Then email can't be blank message should appear

