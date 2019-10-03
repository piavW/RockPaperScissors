require('../spec.helper')

describe('Rock Paper Scissor basic logic', () => {
    let game = new Game
    let rock = 0
    let paper = 1
    let scissors = 2
    function Game() {
        this.check = (playerChoice, ComputerChoice) => {
            if (playerChoice==1 && ComputerChoice==0) {
                return "User wins";
            } else if (playerChoice==0 && ComputerChoice==1) {
                return "Computer wins";
            } else if (playerChoice==0 && ComputerChoice==2) {
                return "User wins";
            } else if (playerChoice==2 && ComputerChoice==0) {
                return "Computer wins";
            } else if (playerChoice==2 && ComputerChoice==1) {
                return "User wins" ;
            } else if (playerChoice==1 && ComputerChoice==2) {
                return "Computer wins";
            } else if (playerChoice == ComputerChoice) {
                return "Tied, try again"
            };
        }
    }
    it('paper beats rock', () => {
        let playerChoice = paper
        let computerChoice = rock
        expect(game.check(playerChoice, computerChoice)).to.eql("User wins")
    })
    it('rock beats scissor', () => {
        let playerChoice = rock
        let computerChoice = scissors
        expect(game.check(playerChoice, computerChoice)).to.eql("User wins")
    }) 
    it('scissors beats paper', () => {
        let playerChoice = paper
        let computerChoice = scissors
        expect(game.check(playerChoice, computerChoice)).to.eql("Computer wins")
    })
    it('if player and computer choice is the same', () => {
        let playerChoice = paper
        let computerChoice = paper
        expect(game.check(playerChoice, computerChoice)).to.eql("Tied, try again")
    })
})