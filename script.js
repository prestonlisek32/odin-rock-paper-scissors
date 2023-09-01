const ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

rock.addEventListener("click", () => {
    alert(playRound("rock", getComputerChoice()) + `\nPlayer: ${playerScore} Computer: ${computerScore}`);
});

paper.addEventListener("click", () => {
    alert(playRound("paper", getComputerChoice()) + `\nPlayer: ${playerScore} Computer: ${computerScore}`);
});

scissors.addEventListener("click", () => {
    alert(playRound("scissors", getComputerChoice()) + `\nPlayer: ${playerScore} Computer: ${computerScore}`);
});

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

