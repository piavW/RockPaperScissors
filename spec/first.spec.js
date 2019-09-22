require('../spec.helper')

describe('Rock Paper Scissor basic logic', () => {
    const rock = 0
    const paper = 1
    const scissor = 2
    let game = new Game

    function Game() {
        this.check = (par1, par2) => {
            if (par1 == par2) {
                return "Tied, try again!"
            } else if (par1==1 && par2==0) { //paper vs rock
                return "Paper wins"
            } else if (par1==0 && par2==1) { //paper vs rock
                return "Paper wins"
            } else if (par1==0 && par2==2) { //rock vs scissor
                return "Rock wins"
            } else if (par1==2 && par2==0) { //rock vs scissor
                return "Rock wins"
            } else if (par1==2 && par2==1) { //scissor vs paper
                return "Scissor wins" 
            } else if (par1==1 && par2==2) { //scissor vs paper
                return "Scissor wins" 
            };
        }
    }

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

})

//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins