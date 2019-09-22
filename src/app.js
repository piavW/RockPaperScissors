if (typeof module !== 'undefined' && module.exports) {
    module.exports = Game;
}

const rock = 0
const paper = 1
const scissor = 2

function Game() {
    this.check = (playerChoice, ComputerChoice) => {
        if (playerChoice == ComputerChoice) {
            return "Tied, try again!"
        } else if (playerChoice==1 && ComputerChoice==0) { //paper vs rock
            return "Paper wins";
        } else if (playerChoice==0 && ComputerChoice==1) { //paper vs rock
            return "Paper wins";
        } else if (playerChoice==0 && ComputerChoice==2) { //rock vs scissor
            return "Rock wins";
        } else if (playerChoice==2 && ComputerChoice==0) { //rock vs scissor
            return "Rock wins";
        } else if (playerChoice==2 && ComputerChoice==1) { //scissor vs paper
            return "Scissor wins" ;
        } else if (playerChoice==1 && ComputerChoice==2) { //scissor vs paper
            return "Scissor wins";
        };
    }
    let getPlayerChoice = () => {
        if (button.addEventListener("click", playerRock)) {
            let playerChoice = rock
            return "player choice is rock"
        } else if (button.addEventListener("click", playerPaper)) {
            let playerChoice = paper
            return "player choice is paper"
        } else if (button.addEventListener("click", Scissor)) {
           let playerChoice = scissor
           return "player choice is scissor"
        }
    }

    let ComputerChoice = () => {
        const computerOptions = [rock, paper, scissor]
        let randomIndex = Math.floor(Math.random()*3);
        let randomChoice = computerOptions[randomIndex]
        return `Computer choice is ${randomChoice}`
    }
}
//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins