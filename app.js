const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCICSSOR = "SCICSSOR";
const DEFAULT = ROCK;

const R_DRAW = "DRAW";
const PLAYER_WIN = "PLAYER_WIN";
const COMPUTER_WIN = "COMPUTER_WIN";

let gameStart = false;

function playerChoice() {
  const selection = prompt(`Selecte any one ${ROCK}, ${PAPER} or ${SCICSSOR} `);
  if (selection != ROCK && selection != SCICSSOR && selection != PAPER) {
    alert(`Invaild choice ! We are selecting for you ${DEFAULT} `);
    return DEFAULT;
  } else {
    return selection;
  }
}

function computerChoice() {
  const random = Math.random();
  if (random < 0.37) {
    return ROCK;
  } else if (random > 0.37 && random < 0.67) {
    return PAPER;
  } else {
    return SCICSSOR;
  }
}

function final(cChoice, pChoice) {
  if (cChoice === pChoice) {
    return R_DRAW;
  } else if (
    (cChoice === PAPER && pChoice === ROCK) ||
    (cChoice === ROCK && pChoice === SCICSSOR) ||
    (cChoice === SCICSSOR && pChoice === PAPER)
  ) {
    return COMPUTER_WIN;
  } else {
    return PLAYER_WIN;
  }
}
// startGameBtn.addEventListener("click", function () {
//   if (gameStart) {
//     return;
//   }
//   gameStart = true;
//   console.log("Game start");
//   const player = playerChoice();
//   //    console.log(player);
//   const computer = computerChoice();
//   //    console.log(computer);
//   const match = final(player, computer);
//   console.log(player, computer, match);
// });

const combine = (resultHandler, operation, ...numbers) => {
  const validtion = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validtion(num);
    } else {
      sum -= validtion(num);
    }
  }
  resultHandler(sum);
};

const showResult = (message, result) => {
  alert(message +' ' + result);
};

  combine(
    showResult.bind(this, "The adding of number is"),
    "ADD",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  )
;

  combine(
    showResult.bind(this, "The subtarcting of number is"),
    "Subratct",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  );
