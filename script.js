const resultDisplay = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
const body = document.querySelector('body');
const scoreBoard = [0, 0];

// Each key beats each of the values in the lists
let wins_against_dict = {
  "Scissors": ["Paper", "Lizard"],
  "Paper": ["Spock", "Rock"],
  "Rock": ["Scissors", "Lizard"],
  "Lizard": ["Spock", "Paper"],
  "Spock": ["Rock", "Scissors"],
}

function randomNumberGen(num){
  /* 
  takes in an integer as an argument and generates a random integer 
  between 0 and one less than the argument
  */
  return Math.floor(Math.random() * num);
}

function getComputerChoice() {
  // randomly generates a choice out of the 5 options
  let num = randomNumberGen(5);
  let choice;

  switch(num){
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
    case 3:
      choice = "Lizard";
      break;
    case 4:
      choice = "Spock";
      break;
  }

  return choice;
}

function capitalize(word){
  // Capitalizes the first letter and set the rest to lower case
  return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
}


function playRound(playerSelection, computerSelection){
  // Takes two selections and determines the winner
  let player = capitalize(playerSelection);
  let result;
  
  if (player == computerSelection){
    result = 0;
  } else if ((wins_against_dict[player]).includes(computerSelection)){
    result = 1;
  } else {
    result = 2; 
  }

  return result;
}

function roundResult(playerSelection, computerSelection, result) {
  let message;

  if (result == 0) {
    message = "Tie!"
  }
  else if (result == 1) {
    message = "You WON! " + playerSelection + " beats " + computerSelection;
  }
  else {
    message = "You lost! " + computerSelection + " beats " + playerSelection;
  }

  return message;
}

function score (player, computer, result){
  // Tracks the score at each turn
  if (result == 0) {
  }
  else if (result == 1) {
    player++;
  }
  else {
    computer++;
  }

  return [player, computer];
}

function finalResult(scoreTracker){
  let message;

  if(scoreTracker[0] == scoreTracker[1]){
    message = "Its a tie game: " + scoreTracker[0] + " - " + scoreTracker[1];
  } 
  else if (scoreTracker[0] > scoreTracker[1]) {
    message = "You won: " + scoreTracker[0] + " - " + scoreTracker[1];
  } 
  else {
    message = "You lost: " + scoreTracker[0] + " - " + scoreTracker[1] + "\nBetter luck next time!";
  }

  return message;
}

function resultFormat (playerSelection, computerSelection, result, scoreTracker) {

  resultDisplay.textContent = roundResult(playerSelection, computerSelection, result);
  resultDisplay.setAttribute('style', 'color: white; font-size: 40px; font-weight: bold');
}

function scoreBoardFormat (scoreTracker) {
  scoreDisplay.textContent = "Score: " + scoreTracker[0] + " - " + scoreTracker[1];
}

function game(playerSelection, scoreTracker){
  let result;

  computerSelection = getComputerChoice();

  result = playRound(playerSelection, computerSelection);

  scoreTracker = score(scoreTracker[0], scoreTracker[1], result);

  resultFormat(playerSelection, computerSelection, result);

  return scoreTracker;
}

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
  button.addEventListener('click', () => {
    let scores = game(button.id, scoreBoard);
    scoreBoardFormat(scores);
    scoreBoard[0] = scores[0];
    scoreBoard[1] = scores[1];

    if (scoreBoard[0] == 5 || scoreBoard[1] == 5) {
      alert(finalResult(scoreBoard));
      scoreBoard[0] = 0;
      scoreBoard[1] = 0;
      scoreBoardFormat(scoreBoard);
    }
  })
})