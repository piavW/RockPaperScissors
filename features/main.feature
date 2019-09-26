Feature: Play Rock Paper Scissors
  As a user
  In order to play the game
  I would like to be able to access a website 
  I would like to be able to choose rock, paper or Scissors
  I would like to play against the computer
  I would like to see if I won or lost

Scenario: Visiting the website
  Given I visit the site
  Then I should see "Rock Paper Scissor"
  And I should see a button "Rock"
  And I should see a button "Paper"
  And I should see a button "Scissor"

Scenario: Playing the game
  Given I visit the site
  When I click a button "rock"
  And the computer chooses "scissors"
  Then I should have the result "Rock wins"
