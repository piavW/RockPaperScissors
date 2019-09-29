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

// function playGame() {
//     displayDiv.innerhtml = `player choice is ${playerChoice} and the computers chooses ${computerChoice}`
//     document.getElementById("play").Game.check(getPlayerChoice(), ComputerChoice())
// }

function ComputerChoice() {
    const computerOptions = [rock, paper, scissor]
    let randomIndex = Math.floor(Math.random()*3);
    let computerChoice = computerOptions[randomIndex]
    return computerChoice
}

// function getPlayerChoice(){
//     const rockButton = document.getElementById("rock")
//     const paperButton = document.getElementById("paper")
//     const scissorButton = document.getElementById("scissor")
//     if (rockButton.addEventListener("click")) {
//         let playerChoice = rock
//       return `player choice is ${playerChoice}`
//     } else if (paperButton.addEventListener("click")) {
//         let playerChoice = paper
//         return playerChoice + "hello"
//     } else if (scissorButton.addEventListener("click")) {
//         let playerChoice = scissor
//         return playerChoice 
//     }
// }


(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('rock')
    let displayDiv = document.getElementById('display_answer')
    
    button.addEventListener('click', () => {
        let value = playerRock()
        displayDiv.innerHTML = value;
        })
})) 

function playerRock() {
    let playerChoice = rock
    return `player choice is Rock`
}

(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('paper')
    let displayDiv = document.getElementById('display_answer')
    
    button.addEventListener('click', () => {
        let value = playerPaper()
        displayDiv.innerHTML = value;
        })
})) 

function playerPaper() {
    let playerChoice = paper
    return `player choice is Paper`
}

(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('scissor')
    let displayDiv = document.getElementById('display_answer')
    
    button.addEventListener('click', () => {
        let value = playerScissor()
        displayDiv.innerHTML = value;
        })
})) 

function playerScissor() {
    let playerChoice = scissor
    return `player choice is Scissors`
}
//Rock vs Paper -> Paper wins
//Rock vs Scissors -> Rock wins
//Paper vs Scissor -> Scissor wins