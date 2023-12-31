const ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        updateScore();
    });
});

function updateScore() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
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



