// Each key beats each of the values in the lists
let winsAgainstDict = {
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
  let win;
  
  if (player == computerSelection){
    message = "Tie!"
  } else if ((wins_against_dict[player]).includes(computerSelection)){
    message = "You Win! " + player + " beats " + computerSelection;
  } else {
    message = "You Lose! " + computerSelection + " beats " + player;
  }

  return message;
}

function score (player, computer, message){
  // Tracks the score at each turn
  if (message == "Tie!") {
  }
  else if (message.substring(0, 8) == "You Win!") {
    player[0]++;
  }
  else {
    computer[1]++;
  }

  return [player, computer];
}

function whoWon (score_tracker){
  // Outputs a message depending on who won after 5 rounds and displays final scores
  if(score_tracker[0] == score_tracker[1]){
    console.log("Its a tie game: " + score_tracker[0] + " - " + score_tracker[1]);
  } else if (score_tracker[0] > score_tracker[1]) {
    console.log("You won: " + score_tracker[0] + " - " + score_tracker[1]);
  } else {
    console.log("You lost: " + score_tracker[0] + " - " + score_tracker[1] + "\nBetter luck next time! ")
  }
}

function game(){
  // Runs a 5-round game
  let score_tracker = [0, 0];
  let message;

  for (let i = 0; i < 5; i++){
    let player = prompt("Enter your selection");

    console.log(message = playround(player, getComputerChoice()));

    score_tracker = score(score_tracker[0], score_tracker[1], message);

    console.log("Score: " + score_tracker[0] + " - " + score_tracker[1]);
  }
  
  console.log("GG!\n");

  who_won(score_tracker);  
}

game();