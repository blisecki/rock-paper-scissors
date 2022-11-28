
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
    
    let winStatement = "You win. " + playerSelection + " beats " + computerSelection  + ".";
    let loseStatement = "You lose. " + computerSelection + " beats " + playerSelection + ".";

    if (playerSelection == computerSelection) {
        return("You tied nerd.");
    } else {
        if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            return (winStatement);
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            return (loseStatement);
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            return (loseStatement);
        }
        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            return (winStatement);
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            return (loseStatement);
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            return (winStatement);
        } else {
            return ('Unknown Input.');
        }
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();

  function game() {
    for (let i = 1; i < 6; i++) {
    const playerSelection = window.prompt("Enter ROCK, PAPER, or SCISSORS.");
    console.log(playRound(playerSelection,computerSelection));
    }
  }
  console.log(game());