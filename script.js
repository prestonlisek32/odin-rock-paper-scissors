const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

alert(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayerChoice() {
    let playerChoice;

    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt((playerChoice ? `You entered ${playerChoice}, ` : "") + "Please choose rock, paper, or scissors").toLowerCase();
    }

    return playerChoice;
}

function playRound(playerSelection, computerSelction) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelction == "scissors") {
            return "You lose! Scissors beats paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else {
        if (computerSelction == "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper.";
        }
    }
}

