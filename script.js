function randomNumberGen(num){
  return Math.floor(Math.random() * num);
}

function getComputerChoice() {
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