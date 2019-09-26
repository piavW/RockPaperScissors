require('../spec.helper')
var sinon = require('sinon');

describe('Rock Paper Scissor basic logic', () => {
    let game = new Game
    it('paper beats rock', () => {
        expect(game.check(1, 0)).to.eq("Paper wins")
    })
    it('rock beats scissor', () => {
        expect(game.check(0, 2)).to.eq("Rock wins")
    }) 
    it('scissor beats paper', () => {
        expect(game.check(2, 1)).to.eq("Scissor wins")
    })
    it('if both choices are the same, the game results in a tie', () => {
        expect(game.check(1,1)).to.eq("Tied, try again!")
    })
    it('computer can randomly choose rock', () => {
        let stubComp = new ComputerChoice
        sinon.stub(Math, 'floor').returns(0)
        expect(stubComp).to.eq(0)//[WIP] How to write this?
    })
    
        describe('Computer enters the game', () => {
            const rock = 0;
            const paper = 1;
            const scissor = 2;
            const computerOptions = [rock, paper, scissor];
            let randomIndex = Math.floor(Math.random()*3);
            let computerChoice = computerOptions[randomIndex];

            it('computer can choose rock', () => {
                let computerChoice = computerOptions[0]
                expect(computerChoice).to.eq(rock)
            })

            it('Players paper wins when computer choice = rock and player choice = paper', () => {
                let computerChoice = rock
                let playerChoice = paper
                expect(game.check(computerChoice, playerChoice)).to.eq("Paper wins")
            })  
        })
})