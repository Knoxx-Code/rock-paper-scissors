//Array to store the choices in the game i.e Rock/Paper/Scissors
const choices = ["rock", "paper", "scissors"];
const container = document.querySelector('.choice-container');
const moveContainer = document.querySelector('.move-container');
const winnerDisplay = document.querySelector('.winner-display');
const choiceTitle = document.querySelector('.choice-title');

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
        return "You win.";
    } else {
        return "You lose. Computer wins.";
    }
}

function game()
{
    //Initialize player scores and winner flag
    let playerScore = 0;
    let compScore = 0;
    let winner = false;

    //Create or get HTML elements to store winner message, scores and choices
    const winnerText = document.createElement('div');
    const playerScoreText = document.querySelector('#player-score');
    const compScoreText = document.querySelector('#comp-score');
    const choiceText = document.createElement('div');

     //For each choice create a button that will represent the player's choice upon clicking
    choices.forEach(choice=>{
        const playerChoiceBtn = document.createElement('button');
        
        playerChoiceBtn.classList.add('player-choice-buttons');

        // Set the background image of the button
        playerChoiceBtn.style.backgroundImage = `url('assets/${choice}.png')`;
        // Set alt text for accessibility
        playerChoiceBtn.setAttribute('alt', choice);

        
        //Event listener to check for player's choice
        playerChoiceBtn.addEventListener('click',()=>{

         //Disable the clicking of the buttons after a winner has been found
         if (winner)
         {
             playerChoiceBtn.forEach(button=>{
                 button.disabled = true;
             });

         }

         // Variable that stores the player's choice
         playerSelection = choice;
         
         //Get the computer's selection
         const computerSelection = getComputerChoice();
         
         // Get the result for each round by calling the playround function
         let result = playRound(playerSelection, computerSelection);

         // Shows the result of each round
         choiceText.textContent = ` ${result.toUpperCase()} You chose ${playerSelection.toUpperCase()}. Computer chooses ${computerSelection.toUpperCase()}.`;
         moveContainer.appendChild(choiceText);

         // Calculate the scores and display them in the html document
         if (result.includes("You win")){
             playerScore += 1;
             playerScoreText.textContent = `Player: ${playerScore}`;
         } else if (result.includes("You lose"))
         {
             compScore +=1;
             compScoreText.textContent = `Computer: ${compScore}`;
         }

         // Handling the winning cases
         if (playerScore === 5)
         {
         
             winnerText.textContent = "YOU WIN!";
             winner = true;
             //Remove the buttons, and titles for a cleaner winning message
             container.style.display = 'none';
             winnerDisplay.style.display = 'flex';
             moveContainer.style.display = 'none';
             choiceTitle.style.display = 'none';
         } 
         else if(compScore === 5)
         {
             
             winnerText.textContent = "COMPUTER WINS!";
             winner = true;
             //Remove the buttons, and titles for a cleaner winning message
             container.style.display = 'none';
             winnerDisplay.style.display = 'flex';
             moveContainer.style.display = 'none';
             choiceTitle.style.display = 'none';
         }
         
         winnerDisplay.appendChild(winnerText);   
        });
        container.appendChild(playerChoiceBtn);
    });

    //New game button. It resets everything and allows a new game to be played
    const newGameBtn = document.querySelector('#new-game');
    
    // Actions when new game buttons is clicked
    newGameBtn.addEventListener('click',()=>{
        //Reset scores and winner flag
        playerScore = 0;
        compScore = 0;
        winner = false;
        //Reset the texts for the scores and other text
        playerScoreText.textContent = "Player: 0";
        compScoreText.textContent = "Computer: 0";
        winnerText.textContent = "";
        choiceText.textContent = "";
        //Resets the styling for elements removed when displaying winning message
        container.style.display = 'flex';
        moveContainer.style.display = 'flex';
        choiceTitle.style.display = 'flex';

        // Re-enables the disabled buttons that allow player to select choice
        playerChoiceBtn.forEach(button=>{
           button.disabled = false;
       });

    });
   

}

// Function call
game();

