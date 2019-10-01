Feature: Play Rock Paper Scissors
	As a user
	In order to play the game
	I would like to be able to access a website 
	I would like to be able to choose rock, paper or Scissors
	I would like to play against the computer
	I would like to see if I won or lost
Background:
	Given I visit the site

Scenario: Visiting the website
	Then I should see "Rock Paper Scissor"
	And I should see a button "Rock"
	And I should see a button "Paper"
	And I should see a button "Scissor"

	Scenario: Player can see the score
	When I click on "rock"
	Then I should see "'Player/Computer wins!'/'Tied, try again!'"
	And I should see "Scoreboard"