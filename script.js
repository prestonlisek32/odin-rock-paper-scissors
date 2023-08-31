const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

let playerScore = 0;

console.log(playerSelection, computerSelection);
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
    } else if (
        (playerSelection == "rock" && computerSelction == "scissors") ||
        (playerSelection == "paper" && computerSelction == "rock") ||
        (playerSelection == "scissors" && computerSelction == "paper")) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelction}.`;
    } else {
        return `You lose! ${computerSelction} beats ${playerSelection}.`;
    }
}


