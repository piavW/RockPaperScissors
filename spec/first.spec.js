require('../spec.helper')

describe('Rock Paper Scissor basic logic', () => {
    const rock = 0
    const paper = 1
    const scissor = 2


    it('rock beats scissor', () => {
        Game(rock, scissor)
        expect().to.be("Rock wins")
    })
})

//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins