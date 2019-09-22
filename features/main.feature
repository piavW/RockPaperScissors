Feature: Play Rock Paper Scissors
  As a user
  In order to play the game
  I would like to be able to access a website where I can play against the computer


  Scenario: Visiting the website
    Given I visit the site
    Then I should see "Rock Paper Scissor"
    And I should see a button "Rock"
    And I should see a button "Paper"
    And I should see a button "Scissor"