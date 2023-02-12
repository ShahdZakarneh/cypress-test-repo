Feature: Article with Popular Tag

    Scenario: Article with Popular Tag
        Given The system has an Article with a popular tag
        When The user create new post with a specific popular tag
        When The user opens the home page
        And The user clicks on the popular tag that is used in that article
        Then The Article should appear in the home page