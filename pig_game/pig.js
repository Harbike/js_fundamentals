'use strict';

const players = document.querySelectorAll(".players");
const totalHeldScores = document.querySelectorAll(".player_reading-score");
const totalCurrentScores = document.querySelectorAll(".player_current-score");
const playerOne = document.querySelector(".player_one");
const playerTwo = document.querySelector(".player_two");
const totalScoreOne = document.querySelector(".total_score-one");
const totalScoreTwo = document.querySelector(".total_score-two");
const currentScoreOne = document.querySelector(".total_score-two");
const currentScoreTwo = document.querySelector(".total_score-two");
const newGame = document.querySelector(".game_new");
const rollDice = document.querySelector(".game_roll");
const holdGame = document.querySelector(".game_pause");
const dices = document.querySelectorAll(".dice");

// when newGame is clicked
function startNewGame() {
  totalHeldScores.forEach((x) => {
    x.textContent = 0;
  });
  totalCurrentScores.forEach((x) => {
    x.textContent = 0;
  });
  dices.forEach((x) => {
    if (!x.classList.contains("hidden")) {
      x.classList.add("hidden");
    }
  });
}
newGame.addEventListener("click", startNewGame);

// switch bgColor when players take turns
let activePlayer = players;
console.log(activePlayer);

// player 1 starts game >> a listener to note turns

// when rollDice is clicked
let initialDiceState = "";
let currentScore = 0;
let sumCurrentScore = 0;

function updateTotalScores() {
  totalCurrentScores.forEach((each) => {
    each.textContent = currentScore;
    sumCurrentScore = currentScore;
  });
}
rollDice.addEventListener("click", () => {
  const randomDiceRoll = Math.floor(Math.random() * 6);
  const displayDice = dices[randomDiceRoll];

  if (initialDiceState !== "") {
    initialDiceState.classList.add("hidden");
  }
  // Update the previousDiceState to the new dice
  initialDiceState = displayDice;
  // check value rolled
  if (displayDice.ariaValueText == 1) {
//    // if each user encounters value-1
// pause summing, clear current and go to next user
    updateTotalScores();
  } else if (displayDice.ariaValueText == 2) {
    console.log(`2`);
    currentScore += 2;
    updateTotalScores();
  } else if (displayDice.ariaValueText == 3) {
    console.log(`3`);
    currentScore += 3;
    updateTotalScores();
  } else if (displayDice.ariaValueText == 4) {
    console.log(`4`);
    currentScore += 4;
    updateTotalScores();
  } else if (displayDice.ariaValueText == 5) {
    console.log(`5`);
    currentScore += 5;
    updateTotalScores();
  } else if (displayDice.ariaValueText == 6) {
    console.log(`6`);
    currentScore += 6;
    updateTotalScores();
  }

  displayDice.classList.remove("hidden");
});

// when holdGame is clicked
holdGame.addEventListener('click', ()=> {
    totalHeldScores.forEach(totalHeldScore => {
        totalHeldScore.textContent = sumCurrentScore;
    })
})

