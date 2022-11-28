
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    let outcome;
    if (randomNumber == 0) {
        outcome = 'ROCK';
    } else if (randomNumber == 1) {
        outcome = 'PAPER';
    } else {
        outcome = 'SCISSORS';
    }

    return outcome;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection == computerSelection) {
        console.log("You tied fucking nerd.");
    }
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));