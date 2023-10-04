//Array to store the choices in the game i.e Rock/Paper/Scissors
const choices = ["rock", "paper", "scissors"];
const container = document.querySelector('#container');

let playerSelection;

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
    let winner = false;

    const winnerText = document.createElement('div');
    const playerScoreText = document.querySelector('#player-score');
    const compScoreText = document.querySelector('#comp-score');
    const compChoiceText = document.createElement('div');

     //For each choice create a button that will represent the player's choice upon clicking
    choices.forEach(choice=>{
        const playerChoiceBtn = document.createElement('button');
        playerChoiceBtn.textContent = choice;
        //Event listener to check for player's choice
        playerChoiceBtn.addEventListener('click',()=>{

         //Disable the clicking of the buttons after a winner has been found
         if (winner)
         {
             playerChoiceBtn.forEach(button=>{
                 button.disabled = true;
             });

         }

         playerSelection = choice;
         console.log(`YOU CHOSE ${playerSelection}`);
         
         //Get the computer's selection
         const computerSelection = getComputerChoice();
         compChoiceText.textContent = `Computer chooses ${computerSelection}`;
         container.appendChild(compChoiceText);

         // Get the result for each round by calling the playround function
         let result = playRound(playerSelection, computerSelection);

         // Calculate the scores and display them in the html document
         if (result.includes(" You win")){
             playerScore += 1;
             playerScoreText.textContent = `Player: ${playerScore}`;
         } else if (result.includes("You lose"))
         {
             compScore +=1;
             compScoreText.textContent = `Computer: ${compScore}`;
         }

         if (playerScore === 5)
         {
         
             winnerText.textContent = "YOU WIN!";
             winner = true;
             
         } 
         else if(compScore === 5)
         {
             
             winnerText.textContent = "COMPUTER WINS!";
             winner = true;
         }
         
         container.appendChild(winnerText);   
        });
        container.appendChild(playerChoiceBtn);
    });

    
   

}

// Function call
game();

