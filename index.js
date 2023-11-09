const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(`The computer chose: ${choice}`);
  return choice;
}

function getPlayerChoice() {
  let correctInput = false;
  while (correctInput == false) {
    const choice = prompt("Choose rock, paper or scissors");
    if (choice == null) {
      continue;
    }
    const choiceLowercase = choice.toLowerCase();
    if (options.includes(choiceLowercase)) {
      correctInput = true;
      return choiceLowercase;
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Draw!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    console.log(`You chose: ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    }
    console.log(`Your score is: ${playerScore}`);
    console.log(`Computers score is: ${computerScore}`);
    console.log("-------------------------------------------------------");
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Too bad! You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}
game();
