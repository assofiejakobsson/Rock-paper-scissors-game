/* jshint esversion: 6 */

//Variables

const computerChoiseDisplay = document.getElementById("computer-choise");
const yourChoiseDisplay = document.getElementById("your-choise");
const messageDisplay = document.getElementById("message");
const allGameChoise = document.querySelectorAll("button");
const restartGame = document.getElementById("restart");

let yourChoise;
let computerChoise;
let message;
let yourScore = 0;
let computerScore = 0;
let gameOver = false;

//Adds events when the user clicks on the selection buttons

allGameChoise.forEach(allGameChoise => allGameChoise.addEventListener('click', (e) => {
    if (!gameOver) {
        yourChoise = e.target.id;
        yourChoiseDisplay.innerHTML = yourChoise;
        generateComputerChoise();
        getMessage();
        getScore();

    }

}));


// Funktion for generate computer choise

function generateComputerChoise() {
    let randomNumber = Math.floor(Math.random() * allGameChoise.length) + 1;

    if (randomNumber === 1) {
        computerChoise = 'rock';
    }
    if (randomNumber === 2) {
        computerChoise = 'scissor';
    }
    if (randomNumber === 3) {
        computerChoise = 'paper';
    }
    computerChoiseDisplay.innerHTML = computerChoise;
}


// Funktion for the display message depending on the users are winning or losing

function getMessage() {
    if (computerChoise === yourChoise) {
        message = "It's a draw";
    }
    if (computerChoise === "rock" && yourChoise === "paper") {
        message = "You win";

    }
    if (computerChoise === "rock" && yourChoise === "scissor") {
        message = "You lose";
    }
    if (computerChoise === "paper" && yourChoise === "scissor") {
        message = "You win";

    }
    if (computerChoise === "paper" && yourChoise === "rock") {
        message = "You lose";

    }
    if (computerChoise === "scissor" && yourChoise === "paper") {
        message = "You lose";
    }
    if (computerChoise === "scissor" && yourChoise === "rock") {
        message = "You win";
    }
    messageDisplay.innerHTML = message;
}


//Function to add points to the user

function incrementYourScore() {

    document.getElementById("your-score").innerText = ++yourScore;

}


//Function to add points to the computer

function incrementComputerScore() {

    document.getElementById("computer-score").innerText = ++computerScore;


}


//function to check the game position and give points to the winner. And end the game

function getScore() {

    if (computerChoise === yourChoise) {

    } else if (computerChoise === "rock" && yourChoise === "paper") {
        incrementYourScore("your-score");
    } else if (computerChoise === "rock" && yourChoise === "scissor") {
        incrementComputerScore("computer-score");
    } else if (computerChoise === "paper" && yourChoise === "scissor") {
        incrementYourScore("your-score");
    } else if (computerChoise === "paper" && yourChoise === "rock") {
        incrementComputerScore("computer-score");
    } else if (computerChoise === "scissor" && yourChoise === "paper") {
        incrementComputerScore("computer-score");
    } else if (computerChoise === "scissor" && yourChoise === "rock") {
        incrementYourScore("your-score");
    }

    if (yourScore === 3) {
        //Game over, user win

        message = "Congratulitions You Won";
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("computer-score").innerText = computerScore;
        gameOver = true;

    } else if (computerScore === 3) {
        //Game over, computer win

        message = "Game Over";
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("computer-score").innerText = computerScore;
        gameOver = true;

    }

    messageDisplay.innerHTML = message;
}


//listens for when the restart button is cliced

restartGame.addEventListener("click", getRestart);


//Adds events when the user clicks on the restart button

function getRestart() {
    message = "";
    yourScore = 0;
    computerScore = 0;
    yourChoise = "";
    computerChoise = "";
    yourChoiseDisplay.innerHTML = yourChoise;
    computerChoiseDisplay.innerHTML = computerChoise;
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("computer-score").innerText = computerScore;
    messageDisplay.innerHTML = message;
    gameOver = false;

}