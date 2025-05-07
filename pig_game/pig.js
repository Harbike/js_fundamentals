"use strict";

const players = document.querySelectorAll(".players");
const totalHeldScores = document.querySelectorAll(".player_held-score");
const totalCurrentScores = document.querySelectorAll(".player_current-score");
const playerOne = document.querySelector(".player_one");
const playerTwo = document.querySelector(".player_two");
const heldScoreOne = document.querySelector(".total_score-0");
const heldScoreTwo = document.querySelector(".total_score-1");
const currentScoreOne = document.querySelector(".player_current-score-0");
const currentScoreTwo = document.querySelector(".player_current-score-1");
const newGame = document.querySelector(".game_new");
const rollDice = document.querySelector(".game_roll");
const holdGame = document.querySelector(".game_pause");
const dices = document.querySelectorAll(".dice");

const paragraph = document.querySelector(".paragraph");
const blurry = document.querySelector(".blurry");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal_close-btn");


// player 1 starts game >> a listener to note turns
let activePlayer = 0;
const highestScore = 30;

// on window load
window.onload = function () {
  startNewGame();
};

// switch bgColor when players take turns
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
    playerOne.classList.remove("active");
    playerTwo.classList.add("active");
  } else if (activePlayer === 1) {
    activePlayer = 0;
    playerOne.classList.add("active");
    playerTwo.classList.remove("active");
  }
}

// when newGame is clicked
function startNewGame() {
  totalHeldScores.forEach((x) => {
    currentScore = [0, 0];
    heldScore = [0, 0];
    x.textContent = 0;
  });
  totalCurrentScores.forEach((x) => {
    currentScore = [0, 0];
    heldScore = [0, 0];
    x.textContent = 0;
  });
  dices.forEach((x) => {
    if (!x.classList.contains("hidden")) {
      x.classList.add("hidden");
    }
  });
  activePlayer = 0;
  playerOne.classList.add("active");
  playerTwo.classList.remove("active");
}
newGame.addEventListener("click", startNewGame);

// // when rollDice is clicked
let initialDiceState = "";
let currentScore = [0, 0];
let heldScore = [0, 0];

function updateTotalScores() {
  document.querySelector(
    `.player_current-score-${activePlayer}`
  ).textContent = currentScore[activePlayer];

  heldScore[activePlayer] += currentScore[activePlayer];

  currentScore[activePlayer] = 0;
}

rollDice.addEventListener("click", () => {
  const randomDiceRoll = Math.floor(Math.random() * 6);
  const displayDice = dices[randomDiceRoll];

  if (initialDiceState !== "") {
    initialDiceState.classList.add("hidden");
  }
  // Update the previousDiceState to the newDiceState
  initialDiceState = displayDice;

// check value rolled
  if (displayDice.ariaValueText == 1) {
    //    // if each user encounters value = 1, pause summation, clear currentValue and go to next user
    currentScore[activePlayer] = 0;

    document.querySelector(
      `.player_current-score-${activePlayer}`
    ).textContent = currentScore[activePlayer];
    switchPlayer();
  } else if (displayDice.ariaValueText == 2) {
    console.log(`2`);
    currentScore[activePlayer] += 2;

    updateTotalScores();
  } else if (displayDice.ariaValueText == 3) {
    console.log(`3`);
    currentScore[activePlayer] += 3;

    updateTotalScores();
  } else if (displayDice.ariaValueText == 4) {
    console.log(`4`);
    currentScore[activePlayer] += 4;

    updateTotalScores();
  } else if (displayDice.ariaValueText == 5) {
    console.log(`5`);
    currentScore[activePlayer] += 5;

    updateTotalScores();
  } else if (displayDice.ariaValueText == 6) {
    console.log(`6`);
    currentScore[activePlayer] += 6;   

    updateTotalScores();
  }

  displayDice.classList.remove("hidden");
});

// close popped modal
function closeModal() {
  modal.classList.add('hidden');
  blurry.classList.add('hidden');
}
// when holdGame is clicked
holdGame.addEventListener("click", () => {
  totalHeldScores.forEach(() => {
    if (heldScore[activePlayer] >= highestScore) {
      if (activePlayer == 0) {
      modal.classList.remove('hidden');
      blurry.classList.remove('hidden');
      paragraph.textContent = 'Player one wins! Congratulations'
      } else {
      modal.classList.remove('hidden');
      blurry.classList.remove('hidden');
      paragraph.textContent = 'Player two wins! Congratulations'
      }
      modalCloseBtn.addEventListener('click', () => {
        closeModal();
        startNewGame();
       });
     }

    if (activePlayer === 0) {   
      document.querySelector(
       `.total_score-${activePlayer}`
     ).textContent =  heldScore[activePlayer];

     currentScore[activePlayer] = 0;
     document.querySelector(
       `.player_current-score-${activePlayer}`
      ).textContent = currentScore[activePlayer];
    } else if (activePlayer === 1) {
      document.querySelector(
       `.total_score-${activePlayer}`
     ).textContent = heldScore[activePlayer];

      currentScore[activePlayer] = 0;
      document.querySelector(
        `.player_current-score-${activePlayer}`
      ).textContent = currentScore[activePlayer];
    }
  });
  switchPlayer();
});