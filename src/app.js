if (typeof module !== 'undefined' && module.exports) {
    module.exports = Game;
}

function Game() {
    this.check = (par1, par2) => {
        if (par1 == par2) {
            return "Tied, try again!"
        } else if (par1==1 && par2==0) { //paper vs rock
            return "Paper wins";
        } else if (par1==0 && par2==1) { //paper vs rock
            return "Paper wins";
        } else if (par1==0 && par2==2) { //rock vs scissor
            return "Rock wins";
        } else if (par1==2 && par2==0) { //rock vs scissor
            return "Rock wins";
        } else if (par1==2 && par2==1) { //scissor vs paper
            return "Scissor wins" ;
        } else if (par1==1 && par2==2) { //scissor vs paper
            return "Scissor wins";
        };
    }
}

const rock = 0
const paper = 1
const scissor = 2

//Computer randomized choice
let ComputerChoice = () => {
    const computerOptions = [rock, paper, scissor]
    let randomIndex = Math.floor(Math.random()*3);
    let randomChoice = computerOptions[randomIndex]
    return randomChoice
}
//player choice
let getPlayerChoice = () => {
    if (button.addEventListener("click", playerRock)) {
        let playerChoice = rock
    } else if (button.addEventListener("click", playerPaper)) {
        let playerChoice = paper
    } else if (button.addEventListener("click", Scissor)) {
       let playerCoice = scissor
    }
}

//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins