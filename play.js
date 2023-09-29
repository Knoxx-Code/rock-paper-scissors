//Array to store the choices in the game i.e Rock/Paper/Scissors
const choices = ["rock", "paper", "scissors"];

//Function that returns the computer choice
function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Function responsible for playing a single round of the game
function playRound(playerSelection, computerSelection) {
    // Convert selection to lowercase for comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Check for invalid Choices
    if (!choices.includes(playerSelection)) {
        return "Invalid Choice. Please choose Rock, Paper or Scissors";
    }

    // Check for winning cases or tie
    if (playerSelection == computerSelection) {
        return "It's a tie.";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return `${playerSelection[0].toUpperCase() + playerSelection.slice(1) } beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}. You win.`;
    } else {
        return `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}. Computer wins.`;
    }
}



