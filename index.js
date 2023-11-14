const playerText = document.querySelector("#player-text")
const computerText = document.querySelector("#computer-text")
const outcomeText = document.querySelector("#outcome-text")
const playerScoreText = document.querySelector("#player-score")
const computerScoreText = document.querySelector("#computer-score")
const gameResult = document.querySelector("#game-result")
const rockButton = document.querySelector("#rock-button")
const paperButton = document.querySelector("#paper-button")
const scissorsButton = document.querySelector("#scissors-button")
const choiceButtons = document.querySelectorAll(".buttons")
const restartButton = document.querySelector(".restart")
const paraEnd = document.querySelector(".end")
const historyList = document.querySelector("ol")


let player;
let computer;
let outcome;
let playerScore = 0;
let computerScore = 0;

choiceButtons.forEach(button => button.addEventListener("click", () => {   
  const listItem = document.createElement("li")
  if(playerScore == 5 || computerScore == 5){
    over()
  }
  else{
    player = button.textContent;
    computerChoice();
    checkWinner();
    playerText.textContent = `Your choice: ${player}`
    computerText.textContent = `Computer choice: ${computer}`
    outcomeText.textContent = `${outcome}`
    playerScoreText.textContent = `Player score: ${playerScore}`
    computerScoreText.textContent = `Computer score: ${computerScore}`
    listItem.textContent = `${outcome} Player: ${player} | Computer: ${computer}`
    historyList.appendChild(listItem)
    if(playerScore == 5 || computerScore == 5){
      over()
    }
  }
}))

restartButton.addEventListener('click', () => {
  playerScore = 0
  computerScore = 0
  playerText.textContent = `Your choice:`
  computerText.textContent = `Computer choice:`
  outcomeText.textContent = `OUTCOME:`
  playerScoreText.textContent = `Player score:`
  computerScoreText.textContent = `Computer score:`
  paraEnd.textContent = ""
  rockButton.removeAttribute('disabled')
  paperButton.removeAttribute('disabled')
  scissorsButton.removeAttribute('disabled')
  listRemove();
})
function listRemove(){
const listRemove = document.getElementById("historyList")
while (listRemove.hasChildNodes()) {
  listRemove.removeChild(listRemove.firstChild);
}}
function over(){
if(playerScore == 5 && playerScore > computerScore){
  outcomeText.textContent = "YOU WON THE GAME!"
  paraEnd.textContent = "(click the restart button to play again)"
  rockButton.setAttribute('disabled', true)
  paperButton.setAttribute('disabled', true)
  scissorsButton.setAttribute('disabled', true)
}
else if (computerScore == 5 && computerScore > playerScore){
  outcomeText.textContent = "YOU LOST THE GAME!"
  paraEnd.textContent = "(click the restart button to play again)"
  rockButton.setAttribute('disabled', true)
  paperButton.setAttribute('disabled', true)
  scissorsButton.setAttribute('disabled', true)
}

}


  function computerChoice(){
  const randNum = Math.floor(Math.random()*3) + 1;
  
  switch(randNum){
    case 1:
      computer = "ROCK"
      break;
    case 2:
      computer = "PAPER"
      break;
    case 3:
      computer = "SCISSORS"  
      break;
  }
}

function checkWinner() {
  if(player == computer){
  outcome = "DRAW!"
  }
  else if (
    player == "PAPER" && computer == "ROCK" ||
    player == "ROCK" && computer == "SCISSORS" ||
    player == "SCISSORS" && computer == "PAPER" 
  ){
    playerScore++
    outcome = "YOU WON THE ROUND!"
    }
  else{
    computerScore++
    outcome = "YOU LOST THE ROUND!"
  }
}