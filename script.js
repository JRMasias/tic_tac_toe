// Variables
var box_1_choice = document.querySelector(".box-1-choice");
var box_2_choice = document.querySelector(".box-2-choice");
var box_3_choice = document.querySelector(".box-3-choice");
var box_4_choice = document.querySelector(".box-4-choice");
var box_5_choice = document.querySelector(".box-5-choice");
var box_6_choice = document.querySelector(".box-6-choice");
var box_7_choice = document.querySelector(".box-7-choice");
var box_8_choice = document.querySelector(".box-8-choice");
var box_9_choice = document.querySelector(".box-9-choice");
var error_msg = document.querySelector(".error-msg");
var game_over = false;
var players_turn = true;
var computer_choice;

// Error message that box is already chosen
function showError() {
  if (!game_over) {
    error_msg.classList.add("text-red-600");
    error_msg.innerHTML = "Choose a different location";
  } else {
    error_msg.classList.add("text-orange-600");
    error_msg.innerHTML = "Game over. Click Play Again";
  }
} // end showError()

// Function for checking if box is selected
function checkBox(boxSelected) {
  // If player's turn, use 'X', if computer use 'O'
  if (players_turn == true) {
    boxSelected.innerHTML = "X";
  } else {
    boxSelected.innerHTML = "O";
  }
  error_msg.classList.remove("text-red-600");

  // Check if user or computer wins after each selection
  if (userWin()) {
    setTimeout(() => {
      error_msg.classList.add("text-green-600");
      error_msg.innerHTML = "You win!!!";
    }, "500");
    game_over = true;
  } else if (compWin()) {
    setTimeout(() => {
      error_msg.classList.add("text-red-600");
      error_msg.innerHTML = "You stink, loser!!";
    }, "500");
    game_over = true;
  } else {
    if (
      box_1_choice.innerHTML.length >= 1 &&
      box_2_choice.innerHTML.length >= 1 &&
      box_3_choice.innerHTML.length >= 1 &&
      box_4_choice.innerHTML.length >= 1 &&
      box_5_choice.innerHTML.length >= 1 &&
      box_6_choice.innerHTML.length >= 1 &&
      box_7_choice.innerHTML.length >= 1 &&
      box_8_choice.innerHTML.length >= 1 &&
      box_9_choice.innerHTML.length >= 1
    ) {
      setTimeout(() => {
        error_msg.classList.add("text-blue-600");
        error_msg.innerHTML = "Tie game!";
      }, "500");
      game_over = true;
    }
  }
} // end checkBox()

// big function to test for USER win
function userWin() {
  let result = false;
  if (
    // first row win
    box_1_choice.innerHTML == "X" &&
    box_2_choice.innerHTML == "X" &&
    box_3_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // second row win
    box_4_choice.innerHTML == "X" &&
    box_5_choice.innerHTML == "X" &&
    box_6_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // third row win
    box_7_choice.innerHTML == "X" &&
    box_8_choice.innerHTML == "X" &&
    box_9_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // diagonal from box 1 win
    box_1_choice.innerHTML == "X" &&
    box_5_choice.innerHTML == "X" &&
    box_9_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // diagonal from box 3 win
    box_3_choice.innerHTML == "X" &&
    box_5_choice.innerHTML == "X" &&
    box_7_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // column 1 win
    box_1_choice.innerHTML == "X" &&
    box_4_choice.innerHTML == "X" &&
    box_7_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // column 2 win
    box_2_choice.innerHTML == "X" &&
    box_5_choice.innerHTML == "X" &&
    box_8_choice.innerHTML == "X"
  ) {
    result = true;
  } else if (
    // column 3 win
    box_3_choice.innerHTML == "X" &&
    box_6_choice.innerHTML == "X" &&
    box_9_choice.innerHTML == "X"
  ) {
    result = true;
  }

  return result;
} // end userWin()

// big function to test for COMPUTER win
function compWin() {
  let result = false;
  if (
    // first row win
    box_1_choice.innerHTML == "O" &&
    box_2_choice.innerHTML == "O" &&
    box_3_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // second row win
    box_4_choice.innerHTML == "O" &&
    box_5_choice.innerHTML == "O" &&
    box_6_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // third row win
    box_7_choice.innerHTML == "O" &&
    box_8_choice.innerHTML == "O" &&
    box_9_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // diagonal from box 1 win
    box_1_choice.innerHTML == "O" &&
    box_5_choice.innerHTML == "O" &&
    box_9_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // diagonal from box 3 win
    box_3_choice.innerHTML == "O" &&
    box_5_choice.innerHTML == "O" &&
    box_7_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // column 1 win
    box_1_choice.innerHTML == "O" &&
    box_4_choice.innerHTML == "O" &&
    box_7_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // column 2 win
    box_2_choice.innerHTML == "O" &&
    box_5_choice.innerHTML == "O" &&
    box_8_choice.innerHTML == "O"
  ) {
    result = true;
  } else if (
    // column 3 win
    box_3_choice.innerHTML == "O" &&
    box_6_choice.innerHTML == "O" &&
    box_9_choice.innerHTML == "O"
  ) {
    result = true;
  }

  return result;
} // end compWin()

// Computer's Turn
function computerSelect() {
  // Set computer to active player
  players_turn = false;

  // Set computer choice to random number between 1 and 9 inclusive
  computer_choice = Math.floor(Math.random() * 9 + 1);

  // If number selected is already chosen, recall computerSelect function
  if (computer_choice == 1) {
    if (box_1_choice.innerHTML.length <= 0) {
      checkBox(box_1_choice);
    } else {
      // need to run checks in each box that if game is over, do not let computerSelect run
      computerSelect();
    }
  } else if (computer_choice == 2) {
    if (box_2_choice.innerHTML.length <= 0) {
      checkBox(box_2_choice);
    } else {
      computerSelect();
    }
  } else if (computer_choice == 3) {
    if (box_3_choice.innerHTML.length <= 0) {
      checkBox(box_3_choice);
    } else {
      computerSelect();
    }
  } else if (computer_choice == 4) {
    if (box_4_choice.innerHTML.length <= 0) {
      checkBox(box_4_choice);
    } else {
      computerSelect();
    }
  } else if (computer_choice == 5) {
    if (box_5_choice.innerHTML.length <= 0) {
      checkBox(box_5_choice);
    } else {
      computerSelect();
    }
  } else if (computer_choice == 6) {
    if (box_6_choice.innerHTML.length <= 0) {
      checkBox(box_6_choice);
    } else {
      computerSelect();
    }
  } else if (computer_choice == 7) {
    if (box_7_choice.innerHTML.length <= 0) {
      checkBox(box_7_choice);
    } else {
      computerSelect();
    }
  } else if (computer_choice == 8) {
    if (box_8_choice.innerHTML.length <= 0) {
      checkBox(box_8_choice);
    } else {
      computerSelect();
    }
  } else {
    if (box_9_choice.innerHTML.length <= 0) {
      checkBox(box_9_choice);
    } else {
      computerSelect();
    }
  }

  // Set user to active player
  players_turn = true;
} // end computerSelect()

/*
 *   EVENT LISTENERS
 */
// box-1
document.querySelector(".box-1").addEventListener("click", () => {
  if (box_1_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_1_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-2
document.querySelector(".box-2").addEventListener("click", () => {
  if (box_2_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_2_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-3
document.querySelector(".box-3").addEventListener("click", () => {
  if (box_3_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_3_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-4
document.querySelector(".box-4").addEventListener("click", () => {
  if (box_4_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_4_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-5
document.querySelector(".box-5").addEventListener("click", () => {
  if (box_5_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_5_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-6
document.querySelector(".box-6").addEventListener("click", () => {
  if (box_6_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_6_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-7
document.querySelector(".box-7").addEventListener("click", () => {
  if (box_7_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_7_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-8
document.querySelector(".box-8").addEventListener("click", () => {
  if (box_8_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_8_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});
// box-9
document.querySelector(".box-9").addEventListener("click", () => {
  if (box_9_choice.innerHTML.length <= 0 && !game_over) {
    checkBox(box_9_choice);
    if (!game_over) {
      computerSelect();
    }
  } else {
    // Display error message
    showError();
  }
});

// Reset button
document.querySelector(".reset-btn").addEventListener("click", () => {
  box_1_choice.innerHTML = "";
  box_2_choice.innerHTML = "";
  box_3_choice.innerHTML = "";
  box_4_choice.innerHTML = "";
  box_5_choice.innerHTML = "";
  box_6_choice.innerHTML = "";
  box_7_choice.innerHTML = "";
  box_8_choice.innerHTML = "";
  box_9_choice.innerHTML = "";
  error_msg.classList.remove("text-red-600");
  error_msg.classList.remove("text-orange-600");
  error_msg.classList.remove("text-green-600");
  error_msg.classList.remove("text-blue-600");
  game_over = false;
});
