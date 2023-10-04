//Array to store the choices in the game i.e Rock/Paper/Scissors
const choices = ["rock", "paper", "scissors"];
const container = document.querySelector('#container');

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
        return `${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}. You lose. Computer wins.`;
    }
}

function game()
{
    let playerScore = 0;
    let compScore = 0;
    let rounds = 1;
    let playerSelection;

    //For each choice create a button that will represent the player's choice upon clicking
    choices.forEach(choice=>{
        const playerChoiceBtn = document.createElement('button');
        playerChoiceBtn.textContent = choice;
        playerChoiceBtn.addEventListener('click',()=>{
            playerSelection = choice;
            console.log(`YOU CHOSE ${playerSelection}`);
        });
        container.appendChild(playerChoiceBtn);
    });

    // // Display overall score
    // console.log(`PLAYER: ${playerScore} - COMPUTER: ${compScore}`);

    // // Checks to display overall result
    // if (playerScore === compScore)
    // {
    //     console.log("IT'S A DRAW");
    // }
    // else if (compScore > playerScore){
    //     console.log("COMPUTER WINS");
    // }
    // else {
    //     console.log("PLAYER WINS");
    // }
}

// Function call
game();

