import { prompt } from "./prompt.js";

console.log(
  `Welcome to the Number Guessing Game! 🎮

  Rules:
  1. The system will generate a random number between 0 and 100.
  2. Your task is to guess this number.
  3. Enter a number when prompted.
  4. If your guess is too high or too low, you'll be notified, and you can guess again.
  5. The game continues until you guess the correct number.
  
  Let's get started! 🚀
  
  `
);
// GÉNÉRATION DU NOMBRE ALÉATOIRE
const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// VALIDATION DU NUMBER DE USER LORS DE L'INPUT
const isValidNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

const startGame = () => {
  const targetNumber = getRandom(1, 100);
  let attemptCount = 0;

  const playGuessingGame = () => {
    const guessNumber = Number(prompt("Enter a number: "));
    attemptCount++;

    if (!isValidNumber(guessNumber)) {
      console.log("Please choose a number between 1 to 100 !\n");
      return playGuessingGame();
    }

    if (guessNumber > targetNumber) {
      console.log("Number too big ! Try Again !\n");
      return playGuessingGame();
    }

    if (guessNumber < targetNumber) {
      console.log("Number too small ! Try Again !\n");
      return playGuessingGame();
    }
    console.log(`🟢 Congratulations, you've guessed the right number 🥳🎉!`);
    console.log(`✨ You succeeded in ${attemptCount} attemp.`);
  };
  const restartGame = () => {
    const choice = prompt("Do you want to retry ? (Y/N): ");
    if (choice.toUpperCase() === "Y") {
      return startGame();
    } else if (choice.toUpperCase() === "N") {
      console.log("Thank you for playing! Goodbye.\n");
    } else {
      console.log("Please enter Y for retry or N for exit !\n");
      return restartGame();
    }
  };
  playGuessingGame();
  restartGame();
};

startGame();
