//Our code will break the game into four parts.
//Get the user’s choice.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error !");
  }
};
//console.log(getUserChoice('paper'));
//Get the computer’s choice
const getComputerChoice = () => {
  Math.floor(Math.random() * 3);
};
console.log(getComputerChoice(0));

//Compare the two choices and determine a winner.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
    } else {
      return "user won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors" || "rock") {
      return "The computer won !";
    } else {
      return "you won !";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock" || "paper") {
      return "The computer won !";
    } else {
      return "you won!";
    }
  }
  //function testing
};
