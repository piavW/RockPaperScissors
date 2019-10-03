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

	Scenario: Player can see the result
		Then I should see "Rock Paper Scissor"
		When I click on "rock"
		Then I should see "Results are:"

	Scenario: Player can see the change in score
		Then I should see "Rock Paper Scissor"
		And I should see "Scoreboard" 
		And I should see "0" and "0"
		When I click on "paper"
		Then I should see "1" and "0"

	Scenario: Player can chose scissors and see the result
		Then I should see "Rock Paper Scissor"
		When I click on "scissors"
		Then I should see "Player choice is Scissors"