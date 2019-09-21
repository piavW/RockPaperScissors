require('../spec.helper')

describe('Rock Paper Scissor basic logic', () => {
    let rock
    let paper
    let scissor

    beforeEach(() => {
        if (rock > paper) {
            paper = "victory"
        } else if (rock > scissor) {
            rock = "victory"
        } else if (scissor > paper) {
            scissor = "victory" 
        }
    });

    it('rock beats scissor', () => {
        rock > scissor
        expect(rock).to.eq ("victory")
    })
})

//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins