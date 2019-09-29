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
}

function playGame() {
    Game.check(getPlayerChoice(), ComputerChoice())
}

function ComputerChoice() {
    const computerOptions = [rock, paper, scissor]
    let randomIndex = Math.floor(Math.random()*3);
    let computerChoice = computerOptions[randomIndex]
    return `the computers chooses ${computerChoice}`
}

function getPlayerChoice() {
    if (document.getElementById("rock").addEventListener("click", ComputerChoice())) {
        let playerChoice = rock
        return playerChoice
    } else if (document.getElementById("paper").addEventListener("click")) {
        let playerChoice = paper
        return playerChoice
    } else if (document.getElementById("scissor").addEventListener("click")) {
        let playerChoice = scissor
        return playerChoice
    }
    return `player choice is ${playerChoice}`
}
//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins