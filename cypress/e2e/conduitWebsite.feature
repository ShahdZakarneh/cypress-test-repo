Feature: Conduit Website
    Testing the Conduit website interms of signingin, signingot, creating articles, delete articles and checks the favorite button.

    Scenario: Login page with email and password
        Given User open Conduit Login page
        When User type email and password
        And User Click on Sign in button
        Then Your Feed should be shown

    Scenario: Create post by clicking New Post button and fill the textboxes as needed
        When User click on New Post
        When User Type Article Title
        When User Type What's this article about?
        When User Type Write your article
        When User Click on Publish Article
        Then Url should contains article

    Scenario: Mark & Unmark favorite article
        When User click on profile page
        Then User have to see My Articles in profile page
        When User Click on favorite icon
        When User open Faviorited Article page
        Then Url should contains favorite
        When User Unclick on favorite icon
        Then No articles are here... yet. should appear on the page

    Scenario: Delete Article from user profile
        When User open Profile page
        When Click an article to delete
        Then Clicked article should be open
        When Click Delete Article button
        Then No articles are here... yet. should be shown

    Scenario: Logout from user account
        When User open Settings Page
        Then Url should contains settings
        When User click on Logout button
        Then Sign In option should appear




