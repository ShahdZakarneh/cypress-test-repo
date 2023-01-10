Feature: Create post

    Scenario: Login
        Given I open Conduit Login page
        When I type email and password
        And Click on Sign in button
        Then Your Feed should be shown

    Scenario: Create post
        When I click on New Post
        Then URL assertion
        When Type Article Title
        And Type What's this article about?
        And Type Write your article
        And Click on Publish Article
        Then Second URL assertion

    Scenario: Mark & Unmark favorite article
        When I click on my profile
        Then Third assertion
        When Click on favorite icon
        Then Fourth assertion
        When Unclick on favorite icon
        Then assertion
