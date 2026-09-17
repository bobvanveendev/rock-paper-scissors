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

// Text select
const title = document.querySelector(".title");

// Containers
const scoreContainer = document.querySelector(".score-container");
const startGameContainer = document.querySelector(".start-game-container");

// Player
const playerScoreSpan = document.querySelector(".player-score span");

// Computer
const computerScoreSpan = document.querySelector(".computer-score span");

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      playerScoreSpan.textContent = humanScore;

      console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      playerScoreSpan.textContent = humanScore;

      console.log("You win! Paper beats rock.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      playerScoreSpan.textContent = humanScore;

      console.log("You win! Scissors beats paper.");
    } else {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  function startGame() {
    buttons.forEach((button) => {
      startButton.disabled = true;
      button.disabled = false;
      title.classList.add("fade-out");
      startGameContainer.classList.add("fade-in");
      playerScoreSpan.textContent = humanScore;
      computerScoreSpan.textContent = computerScore;
    });
  }

  function endGame() {}

  function resetGame() {}

  startButton.addEventListener("click", () => {
    startGame();
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const humanChoice = getHumanChoice(event);
      const computerChoice = getComputerChoice(3);

      playRound(humanChoice, computerChoice);
    });
  });

  if (humanScore > computerScore) {
    console.log("Human wins");
  } else if (computerScore > humanScore) {
    console.log("Computer wins");
  } else {
    console.log("It's a draw");
  }
}

playGame();
