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

    // Game loop. Consists if 5 rounds
    for(rounds;rounds<=5;rounds++){
        let playerSelection; 
        let isValid = false;

        //Get the player's selection and check for invalid choices
        while (!isValid)
        {
            playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors: ");
            if (choices.includes(playerSelection.toLowerCase()))
            {
                isValid = true;
            }
            else
            {
                console.log("Invalid choice. Select Rock, Paper or Scissors");
            }
        }

        // Get the computer's selection
        const computerSelection = getComputerChoice();

        // Get the result for each round by calling the playround function
        let result = playRound(playerSelection, computerSelection);

        // Display result for each round
        console.log(`Round ${rounds}: ${result}`);

        // Calculate the player score
        if (result.includes(" You win")){
            playerScore += 1;
        } else if (result.includes("You lose"))
        {
            compScore +=1;
        }
    }

    // Display overall score
    console.log(`PLAYER: ${playerScore} - COMPUTER: ${compScore}`);

    // Checks to display overall result
    if (playerScore === compScore)
    {
        console.log("IT'S A DRAW");
    }
    else if (compScore > playerScore){
        console.log("COMPUTER WINS");
    }
    else {
        console.log("PLAYER WINS");
    }
}

// Function call
game();

