require('../spec.helper')

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

        describe('Computer enters the game', () => {      
            
            it('computer can choose at random from an array', () => {
                let computerChoice = randomChoice()
                expect(computerChoice).to.eq(randomChoice())
            })
        })
    
})