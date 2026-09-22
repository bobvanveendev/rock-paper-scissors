let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
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
const gameResult = document.querySelector(".game-result");

// Containers
const startGameContainer = document.querySelector(".start-game-container");

// Player
const playerScoreSpan = document.querySelector(".player-score span");
const playerChoiceSpan = document.querySelector(".player-choice span");

// Computer
const computerScoreSpan = document.querySelector(".computer-score span");
const computerChoiceSpan = document.querySelector(".computer-choice span");

function playGame() {
  function playRound(humanChoice, computerChoice) {
    playerChoiceSpan.textContent = humanChoice;
    computerChoiceSpan.textContent = computerChoice;

    if (humanChoice === computerChoice) {
      gameResult.textContent = "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      playerScoreSpan.textContent = humanScore;
      gameResult.textContent = `You won the round! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      gameResult.textContent = `You lost the round! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }
  }

  function startGame() {
    startButton.disabled = true;

    buttons.forEach((button) => {
      button.disabled = false;
    });

    title.classList.add("fade-out");
    startGameContainer.classList.add("fade-in");
    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    gameResult.textContent = "Let's play!";
  }

  function endGame() {
    if (humanScore === 5) {
      gameResult.textContent = "You won the game!";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    } else if (computerScore === 5) {
      gameResult.textContent = "The computer won the game!";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;

    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    playerChoiceSpan.textContent = "";
    computerChoiceSpan.textContent = "";
    gameResult.textContent = "Game reset! Make your choice.";
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  startButton.addEventListener("click", () => {
    startGame();
  });

  resetButton.addEventListener("click", () => {
    resetGame();
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const humanChoice = getHumanChoice(event);
      const computerChoice = getComputerChoice();

      playRound(humanChoice, computerChoice);
      endGame();
    });
  });
  resetGame();
}

playGame();
