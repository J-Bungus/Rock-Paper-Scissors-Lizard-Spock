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


function playround(playerSelection, computerSelection){
  // Takes two selections and determines the winner
  let player = capitalize(playerSelection);
  let message;
  
  if (player == computerSelection){
    message = "Tie!";
  } else if ((wins_against_dict[player]).includes(computerSelection)){
    message = "You Win! " + player + " beats " + computerSelection;
  } else {
    message = "You Lose! " + computerSelection + " beats " + player;
  }

  return message;
}

