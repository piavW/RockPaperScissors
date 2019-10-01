if (typeof module !== 'undefined' && module.exports) {
    module.exports = Game;
}

let rockButton = document.getElementById('rock')
let paperButton = document.getElementById('paper')
let scissorsButton = document.getElementById('scissors')
let playerDiv = document.getElementById('display_answer')
let displayWin = document.getElementById('display-winner')
let playScoreDiv = document.getElementById("player-score")
let compScoreDiv = document.getElementById("computer-score")

function Game() {
    this.check = (playerChoice, ComputerChoice) => {
        if (playerChoice == ComputerChoice) {
            return "Tied, try again!"
        } else if ((playerChoice==paper && ComputerChoice==rock) || (playerChoice==rock && ComputerChoice==scissors) || (playerChoice==scissors && ComputerChoice==paper)) {
            return playPoint()
        } else {
            return compPoint()
        };
    }
}
let playerScore = 0
let computerScore = 0

function playPoint() {
    playerScore++
    playScoreDiv.innerHTML = playerScore
    return displayWin.innerHTML = `Player wins!`
}

function compPoint() {
    computerScore++
    compScoreDiv.innerHTML = computerScore
    return displayWin.innerHTML = `Computer wins!`
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
    displayComputer.innerHTML = `Computer choice is ${value}`
    return computerChoice
}
    
rockButton.addEventListener('click', () => {
    playerDiv.innerHTML = `Player choice is Rock`;
    let playerChoice = rock
    let game = new Game
    displayWin.innerHTML = game.check(playerChoice, ComputerChoice())
})

paperButton.addEventListener('click', () => {
    playerDiv.innerHTML = `Player choice is Paper`;
    let playerChoice = paper
    let game = new Game
    displayWin.innerHTML = game.check(playerChoice, ComputerChoice())
})

scissorsButton.addEventListener('click', () => {
    playerDiv.innerHTML = `Player choice is Scissors`;
    let playerChoice = scissors
    let game = new Game
    displayWin.innerHTML = game.check(playerChoice, ComputerChoice())
})