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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Game;
}