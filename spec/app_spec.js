require('../spec.helper')

describe('Rock Paper Scissor basic logic', () => {
    let game = new Game
    it('paper beats rock', () => {
        expect(game.check(paper, rock)).to.eq("Paper wins")
    })
    it('rock beats scissor', () => {
        expect(game.check(rock, scissors)).to.eq("Rock wins")
    }) 
    it('scissor beats paper', () => {
        expect(game.check(scissors, paper)).to.eq("Scissor wins")
    })
    it('if both choices are the same, the game results in a tie', () => {
        expect(game.check(paper,paper)).to.eq("Tied, try again!")
    })
    
        describe('Computer enters the game', () => {
            const computerOptions = [rock, paper, scissor];

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