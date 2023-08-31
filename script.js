
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayerChoice() {
    let playerChoice;
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Please choose rock, paper, or scissors").toLowerCase();
    }
    return playerChoice;

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
