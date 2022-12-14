
  let playerScore = 0;
  let computerScore = 0;

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

function checkScore(){
    if (computerScore == 5) {
        document.getElementById("winner").innerHTML = "Computer wins!";
    } else if (playerScore == 5) {
        document.getElementById("winner").innerHTML = "You win!";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    let winStatement = "You win. " + playerSelection + " beats " + computerSelection  + ".";
    let loseStatement = "You lose. " + computerSelection + " beats " + playerSelection + ".";

    if (playerSelection == computerSelection) {
        document.getElementById("results").innerHTML = "You tied nerd.";
        return;
    } else {
        if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            document.getElementById("results").innerHTML = winStatement;
            playerScore++;
            document.getElementById("player").innerHTML = playerScore;
            return (winStatement);
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            document.getElementById("results").innerHTML = loseStatement;
            computerScore++;
            document.getElementById("computer").innerHTML = computerScore;
            return (loseStatement);
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            document.getElementById("results").innerHTML = loseStatement;
            computerScore++;
            document.getElementById("computer").innerHTML = computerScore;
            return (loseStatement);
        }
        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            document.getElementById("results").innerHTML = winStatement;
            playerScore++;
            document.getElementById("player").innerHTML = playerScore;
            return (winStatement);
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            document.getElementById("results").innerHTML = loseStatement;
            computerScore++;
            document.getElementById("computer").innerHTML = computerScore;
            return (loseStatement);
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            document.getElementById("results").innerHTML = winStatement;
            playerScore++;
            document.getElementById("player").innerHTML = playerScore;
            return (winStatement);
        } else {
            return ('Unknown Input.');
        }
    }

    
  }


  function game() {


window.addEventListener('click', function (e) {
    let computerSelection = getComputerChoice();
    let playerSelection = document.querySelector(`button[id="${e.target.id}"]`).id.toUpperCase();
    playRound(playerSelection, computerSelection);
    checkScore();
});

  }
  console.log(game());