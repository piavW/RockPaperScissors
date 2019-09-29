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
    Game.check(playerChoice, ComputerChoice())
}

function ComputerChoice() {
    const computerOptions = [rock, paper, scissor]
    let randomIndex = Math.floor(Math.random()*3);
    let computerChoice = computerOptions[randomIndex]
    return computerChoice
}

(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('rock')
    let displayDiv = document.getElementById('display_answer')
    let displayWin = document.getElementById('display-winner')
    
    button.addEventListener('click', () => {
        let value = playerRock()
        displayDiv.innerHTML = value;
        let playerChoice = rock
        let game = new Game
        let result = game.check(playerChoice, ComputerChoice())
        displayWin.innerHTML = result
        })
})) 

function playerRock() {
    return `player choice is Rock`
}

(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('paper')
    let displayDiv = document.getElementById('display_answer')
    let displayWin = document.getElementById('display-winner')
    
    button.addEventListener('click', () => {
        let value = playerPaper()
        displayDiv.innerHTML = value;
        let playerChoice = paper
        let game = new Game
        let result = game.check(playerChoice, ComputerChoice())
        displayWin.innerHTML = result
        })
})) 

function playerPaper() {
    return `player choice is Paper`
}

(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('scissor')
    let displayDiv = document.getElementById('display_answer')
    let displayWin = document.getElementById('display-winner')
    
    button.addEventListener('click', () => {
        let value = playerScissor()
        displayDiv.innerHTML = value;
        let playerChoice = scissor
        let game = new Game
        let result = game.check(playerChoice, ComputerChoice())
        displayWin.innerHTML = result
        })
})) 

function playerScissor() {
    return `player choice is Scissor`
}
