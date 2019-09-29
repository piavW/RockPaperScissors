if (typeof module !== 'undefined' && module.exports) {
    module.exports = Game;
}

function Game() {
    this.check = (playerChoice, ComputerChoice) => {
        if (playerChoice == ComputerChoice) {
            return "Results are: Tied, try again!"
        } else if (playerChoice==paper && ComputerChoice==rock) {
            return "Results are: Player wins with Paper";
        } else if (playerChoice==rock && ComputerChoice==paper) {
            return "Results are: Computer wins with Paper";
        } else if (playerChoice==rock && ComputerChoice==scissors) {
            return "Results are: Player wins with Rock";
        } else if (playerChoice==scissors && ComputerChoice==rock) {
            return "Results are: Computer wins with Rock";
        } else if (playerChoice==scissors && ComputerChoice==paper) {
            return "Results are: Player wins with Scissors" ;
        } else if (playerChoice==paper && ComputerChoice==scissors) {
            return "Results are: Computer wins with Scissors";
        };
    }
}

function ComputerChoice() {
    const computerOptions = [rock, paper, scissors]
    let randomIndex = Math.floor(Math.random()*3);
    let computerChoice = computerOptions[randomIndex]
    let displayComputer = document.getElementById('display-computer')
        if (randomIndex == 0){
            value = "Rock"
        } else if (randomIndex == 1){
            value = "Paper"
        } else {
        value = "Scissors"
        }
        let compString = value
    displayComputer.innerHTML = `Computer choice is ${compString}`
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
    return `Player choice is Rock`
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
    return `Player choice is Paper`
}

(document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('scissors')
    let displayDiv = document.getElementById('display_answer')
    let displayWin = document.getElementById('display-winner')
    
    button.addEventListener('click', () => {
        let value = playerScissors()
        displayDiv.innerHTML = value;
        let playerChoice = scissors
        let game = new Game
        let result = game.check(playerChoice, ComputerChoice())
        displayWin.innerHTML = result
        })
})) 

function playerScissors() {
    return `Player choice is Scissors`
}