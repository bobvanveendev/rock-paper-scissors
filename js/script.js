let humanScore = 0;
let computerScore = 0;
let gameActive = false;

function getComputerChoice(max) {
  let result = Math.floor(Math.random() * max);
  let computerChoice;

  if (result === 0) {
    computerChoice = "rock";
  } else if (result === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice(event) {
  let humanChoice;

  if (event.currentTarget.classList.contains("rock-button")) {
    humanChoice = "rock";
  } else if (event.currentTarget.classList.contains("paper-button")) {
    humanChoice = "paper";
  } else {
    humanChoice = "scissors";
  }
  return humanChoice;
}

// Select buttons
const buttons = document.querySelectorAll(".buttons");
const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const scoreContainer = document.querySelector(".score-container");
    const userContext = document.createElement("h3");
    if (event.currentTarget.classList.contains("rock-button")) {
      userContext.textContent = "Rock";
      scoreContainer.appendChild(userContext);
    } else if (event.currentTarget.classList.contains("paper-button")) {
      userContext.textContent = "Paper";
      scoreContainer.appendChild(userContext);
    } else {
      userContext.textContent = "Scissors";
      scoreContainer.appendChild(userContext);
    }
  });
});

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats rock.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beats paper.");
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  function startGame() {}

  function endGame() {}

  function resetGame() {}

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice(3);

  playRound(humanSelection, computerSelection);

  // humanSelection = getHumanChoice();
  // computerSelection = getComputerChoice(3);

  // // playRound(humanSelection, computerSelection);

  // // humanSelection = getHumanChoice();
  // // computerSelection = getComputerChoice(3);

  // // playRound(humanSelection, computerSelection);

  // // humanSelection = getHumanChoice();
  // // computerSelection = getComputerChoice(3);

  // // playRound(humanSelection, computerSelection);

  // // humanSelection = getHumanChoice();
  // // computerSelection = getComputerChoice(3);

  // // playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    console.log("Human wins");
  } else if (computerScore > humanScore) {
    console.log("Computer wins");
  } else {
    console.log("It's a draw");
  }
}

playGame();
