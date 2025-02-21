const $cells = document.querySelectorAll(".game-screen-grid__cell");
const $gameScreen = document.querySelector(".game-screen");
const $homePage = document.querySelector(".home-page");
const $gameStartButton = document.querySelector(".button-player-vs-player");
const $gameRulesButton = document.querySelector(".go-to-game-rule");
const $gameRulesPage = document.querySelector(".rules-page");
const $gameRulesButtonClose = document.querySelector(".button-under-rules")


let currentPlayer = "rouge";
let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

console.log(gameBoard);

$gameStartButton.addEventListener("click", function () {
  $homePage.classList.add("hidden");
  $gameScreen.classList.remove("hidden");
});

$gameRulesButton.addEventListener("click", function () {
  $homePage.classList.add("hidden");
  $gameRulesPage.classList.remove("hidden");
});

$gameRulesButtonClose.addEventListener("click", function () {
  $gameRulesPage.classList.add("hidden");
  $homePage.classList.remove("hidden");
});

function checkWin() {
  if (
    gameBoard[5][0] !== "" &&
    gameBoard[5][0] === gameBoard[4][0] &&
    gameBoard[4][0] === gameBoard[3][0] &&
    gameBoard[3][0] === gameBoard[2][0]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][0] !== "" &&
    gameBoard[4][0] === gameBoard[3][0] &&
    gameBoard[3][0] === gameBoard[2][0] &&
    gameBoard[2][0] === gameBoard[1][0]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][0] !== "" &&
    gameBoard[3][0] === gameBoard[2][0] &&
    gameBoard[2][0] === gameBoard[1][0] &&
    gameBoard[1][0] === gameBoard[0][0]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][1] !== "" &&
    gameBoard[5][1] === gameBoard[4][1] &&
    gameBoard[4][1] === gameBoard[3][1] &&
    gameBoard[3][1] === gameBoard[2][1]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][1] !== "" &&
    gameBoard[4][1] === gameBoard[3][1] &&
    gameBoard[3][1] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[1][1]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][1] !== "" &&
    gameBoard[3][1] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[0][1]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][2] !== "" &&
    gameBoard[5][2] === gameBoard[4][2] &&
    gameBoard[4][2] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[2][2]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][2] !== "" &&
    gameBoard[4][2] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[1][2]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][2] !== "" &&
    gameBoard[3][2] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[0][2]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][3] !== "" &&
    gameBoard[5][3] === gameBoard[4][3] &&
    gameBoard[4][3] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[2][3]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][3] !== "" &&
    gameBoard[4][3] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[1][3]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][3] !== "" &&
    gameBoard[3][3] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[1][3] &&
    gameBoard[1][3] === gameBoard[0][3]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][4] !== "" &&
    gameBoard[5][4] === gameBoard[4][4] &&
    gameBoard[4][4] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[2][4]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][4] !== "" &&
    gameBoard[4][4] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[1][4]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][4] !== "" &&
    gameBoard[3][4] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[1][4] &&
    gameBoard[1][4] === gameBoard[0][4]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][5] !== "" &&
    gameBoard[5][5] === gameBoard[4][5] &&
    gameBoard[4][5] === gameBoard[3][5] &&
    gameBoard[3][5] === gameBoard[2][5]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][5] !== "" &&
    gameBoard[4][5] === gameBoard[3][5] &&
    gameBoard[3][5] === gameBoard[2][5] &&
    gameBoard[2][5] === gameBoard[1][5]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][5] !== "" &&
    gameBoard[3][5] === gameBoard[2][5] &&
    gameBoard[2][5] === gameBoard[1][5] &&
    gameBoard[1][5] === gameBoard[0][5]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][6] !== "" &&
    gameBoard[5][6] === gameBoard[4][6] &&
    gameBoard[4][6] === gameBoard[3][6] &&
    gameBoard[3][6] === gameBoard[2][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][6] !== "" &&
    gameBoard[4][6] === gameBoard[3][6] &&
    gameBoard[3][6] === gameBoard[2][6] &&
    gameBoard[2][6] === gameBoard[1][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][6] !== "" &&
    gameBoard[3][6] === gameBoard[2][6] &&
    gameBoard[2][6] === gameBoard[1][6] &&
    gameBoard[1][6] === gameBoard[0][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[0][0] !== "" &&
    gameBoard[0][0] === gameBoard[0][1] &&
    gameBoard[0][1] === gameBoard[0][2] &&
    gameBoard[0][2] === gameBoard[0][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[0][1] !== "" &&
    gameBoard[0][1] === gameBoard[0][2] &&
    gameBoard[0][2] === gameBoard[0][3] &&
    gameBoard[0][3] === gameBoard[0][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[0][2] !== "" &&
    gameBoard[0][2] === gameBoard[0][3] &&
    gameBoard[0][3] === gameBoard[0][4] &&
    gameBoard[0][4] === gameBoard[0][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[0][3] !== "" &&
    gameBoard[0][3] === gameBoard[0][4] &&
    gameBoard[0][4] === gameBoard[0][5] &&
    gameBoard[0][5] === gameBoard[0][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[1][0] !== "" &&
    gameBoard[1][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[1][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[1][1] !== "" &&
    gameBoard[1][1] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[1][3] &&
    gameBoard[1][3] === gameBoard[1][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[1][2] !== "" &&
    gameBoard[1][2] === gameBoard[1][3] &&
    gameBoard[1][3] === gameBoard[1][4] &&
    gameBoard[1][4] === gameBoard[1][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[1][3] !== "" &&
    gameBoard[1][3] === gameBoard[1][4] &&
    gameBoard[1][4] === gameBoard[1][5] &&
    gameBoard[1][5] === gameBoard[1][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[2][0] !== "" &&
    gameBoard[2][0] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[2][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[2][1] !== "" &&
    gameBoard[2][1] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[2][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[2][2] !== "" &&
    gameBoard[2][2] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[2][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[2][3] !== "" &&
    gameBoard[2][3] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[2][5] &&
    gameBoard[2][5] === gameBoard[2][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[3][0] !== "" &&
    gameBoard[3][0] === gameBoard[3][1] &&
    gameBoard[3][1] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[3][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][1] !== "" &&
    gameBoard[3][1] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[3][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][2] !== "" &&
    gameBoard[3][2] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[3][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][3] !== "" &&
    gameBoard[3][3] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[3][5] &&
    gameBoard[3][5] === gameBoard[3][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[4][0] !== "" &&
    gameBoard[4][0] === gameBoard[4][1] &&
    gameBoard[4][1] === gameBoard[4][2] &&
    gameBoard[4][2] === gameBoard[4][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][1] !== "" &&
    gameBoard[4][1] === gameBoard[4][2] &&
    gameBoard[4][2] === gameBoard[4][3] &&
    gameBoard[4][3] === gameBoard[4][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][2] !== "" &&
    gameBoard[4][2] === gameBoard[4][3] &&
    gameBoard[4][3] === gameBoard[4][4] &&
    gameBoard[4][4] === gameBoard[4][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][3] !== "" &&
    gameBoard[4][3] === gameBoard[4][4] &&
    gameBoard[4][4] === gameBoard[4][5] &&
    gameBoard[4][5] === gameBoard[4][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][0] !== "" &&
    gameBoard[5][0] === gameBoard[5][1] &&
    gameBoard[5][1] === gameBoard[5][2] &&
    gameBoard[5][2] === gameBoard[5][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][1] !== "" &&
    gameBoard[5][1] === gameBoard[5][2] &&
    gameBoard[5][2] === gameBoard[5][3] &&
    gameBoard[5][3] === gameBoard[5][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][2] !== "" &&
    gameBoard[5][2] === gameBoard[5][3] &&
    gameBoard[5][3] === gameBoard[5][4] &&
    gameBoard[5][4] === gameBoard[5][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][3] !== "" &&
    gameBoard[5][3] === gameBoard[5][4] &&
    gameBoard[5][4] === gameBoard[5][5] &&
    gameBoard[5][5] === gameBoard[5][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][0] !== "" &&
    gameBoard[5][0] === gameBoard[4][1] &&
    gameBoard[4][1] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[2][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][0] !== "" &&
    gameBoard[4][0] === gameBoard[3][1] &&
    gameBoard[3][1] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[1][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][0] !== "" &&
    gameBoard[3][0] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[0][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][1] !== "" &&
    gameBoard[5][1] === gameBoard[4][2] &&
    gameBoard[4][2] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[2][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][1] !== "" &&
    gameBoard[4][1] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[1][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][1] !== "" &&
    gameBoard[3][1] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[1][3] &&
    gameBoard[1][3] === gameBoard[0][4]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][2] !== "" &&
    gameBoard[5][2] === gameBoard[4][3] &&
    gameBoard[4][3] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[2][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][2] !== "" &&
    gameBoard[4][2] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[1][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][2] !== "" &&
    gameBoard[3][2] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[1][4] &&
    gameBoard[1][4] === gameBoard[0][5]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][3] !== "" &&
    gameBoard[5][3] === gameBoard[4][4] &&
    gameBoard[4][4] === gameBoard[3][5] &&
    gameBoard[3][5] === gameBoard[2][6]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][3] !== "" &&
    gameBoard[4][3] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[2][5] &&
    gameBoard[2][5] === gameBoard[1][6]
  ) {
    console.log("Victoire");
    return true;
  }

  if (
    gameBoard[5][6] !== "" &&
    gameBoard[5][6] === gameBoard[4][5] &&
    gameBoard[4][5] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[2][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][6] !== "" &&
    gameBoard[4][6] === gameBoard[3][5] &&
    gameBoard[3][5] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[1][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][6] !== "" &&
    gameBoard[3][6] === gameBoard[2][5] &&
    gameBoard[2][5] === gameBoard[1][4] &&
    gameBoard[1][4] === gameBoard[0][3]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][5] !== "" &&
    gameBoard[5][5] === gameBoard[4][4] &&
    gameBoard[4][4] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[2][2]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][5] !== "" &&
    gameBoard[4][5] === gameBoard[3][4] &&
    gameBoard[3][4] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[1][2]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][5] !== "" &&
    gameBoard[3][5] === gameBoard[2][4] &&
    gameBoard[2][4] === gameBoard[1][3] &&
    gameBoard[1][3] === gameBoard[0][2]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][4] !== "" &&
    gameBoard[5][4] === gameBoard[4][3] &&
    gameBoard[4][3] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[2][1]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][4] !== "" &&
    gameBoard[4][4] === gameBoard[3][3] &&
    gameBoard[3][3] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[1][1]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][4] !== "" &&
    gameBoard[3][4] === gameBoard[2][3] &&
    gameBoard[2][3] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[0][1]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[5][3] !== "" &&
    gameBoard[5][3] === gameBoard[4][2] &&
    gameBoard[4][2] === gameBoard[3][1] &&
    gameBoard[3][1] === gameBoard[2][0]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[4][3] !== "" &&
    gameBoard[4][3] === gameBoard[3][2] &&
    gameBoard[3][2] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[1][0]
  ) {
    console.log("Victoire");
    return true;
  }
  if (
    gameBoard[3][3] !== "" &&
    gameBoard[3][3] === gameBoard[2][2] &&
    gameBoard[2][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[0][0]
  ) {
    console.log("Victoire");
    return true;
  }

  return false;
}

const rouge = `<img src="./assets/counter-red-large.svg" alt="">`;
const jaune = `<img src="./assets/counter-yellow-large.svg" alt="">`;

function cellVide(cell) {
  return cell.innerHTML === "";
}

$cells.forEach(function ($cell) {
  $cell.addEventListener("click", function () {
    let dataY = null;

    const dataX = $cell.getAttribute("data-x");

    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][dataX] === "") {
        dataY = i;
        console.log("dataY", dataY);
        break;
      }
    }

    if (currentPlayer === "rouge") {
      document.querySelector(
        `[data-y="${dataY}"][data-x="${dataX}"]`
      ).innerHTML = rouge;
      gameBoard[dataY][dataX] = "rouge";
      currentPlayer = "jaune";
    } else {
      document.querySelector(
        `[data-y="${dataY}"][data-x="${dataX}"]`
      ).innerHTML = jaune;
      gameBoard[dataY][dataX] = "jaune";
      currentPlayer = "rouge";
    }
    console.log(gameBoard);
    if (checkWin()) {
      $gameScreen.style.pointerEvents = "none";
      if (currentPlayer === "rouge") {
        currentPlayer = "jaune";
      } else {
        currentPlayer = "rouge";
      }
      setTimeout(() => {
        alert("Victoire " + currentPlayer);
      }, 50);
    }
  });
});
