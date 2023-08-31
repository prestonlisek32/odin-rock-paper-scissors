const ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;

playGame();

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

function playRound(playerSelection, computerSelection) {
    //tie condition
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (
        //player win conditions
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        //if player didnt win, computer won
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function playGame() {
    for (let i = 0; i < ROUNDS; i++) {
        alert(playRound(getPlayerChoice(), getComputerChoice()) + `\nPlayer: ${playerScore} Computer: ${computerScore}`);
    }
}

