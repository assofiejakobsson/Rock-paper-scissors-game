/* jshint esversion: 6 */

//Variables

const computerChoiseDisplay = document.getElementById("computer-choise");
const yourChoiseDisplay = document.getElementById("your-choise");
const messageDisplay = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const allGameChoise = document.querySelectorAll("button");
let yourChoise;
let computerChoise;
let message;
let yourScore = 0;
let computerScore = 0;

//Grab all choise btn and functions for the users and computers choise

allGameChoise.forEach(allGameChoise => allGameChoise.addEventListener('click', (e) => {
    yourChoise = e.target.id;
    yourChoiseDisplay.innerHTML = yourChoise;
    generateComputerChoise();
    getMessage();
    getScore();
}));

// Funktion for computer choise

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

// Funktion for the display message depends on the users are winning or losing

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

//Funktion for the users score count

function incrementYourScore() {
    
    document.getElementById("your-score").innerText =  ++yourScore;
    
}

//Funktion for the computers score count

function incrementComputerScore() {
    
    document.getElementById("computer-score").innerText = ++computerScore;
    
    
}


//Funktion for increment score and reset the game score back to 0 after somone get 3 points

function getScore() {
    
    if (computerChoise === yourChoise) {
        
    }
    else if (computerChoise === "rock" && yourChoise === "paper") {
        incrementYourScore("your-score");
    }
    else if (computerChoise === "rock" && yourChoise === "scissor") {
        incrementComputerScore("computer-score");
    }
    else if (computerChoise === "paper" && yourChoise === "scissor") {
        incrementYourScore("your-score");
    }
    else if (computerChoise === "paper" && yourChoise === "rock") {
        incrementComputerScore("computer-score");
    }
    else if (computerChoise === "scissor" && yourChoise === "paper") {
        incrementComputerScore("computer-score");
    }
    else if (computerChoise === "scissor" && yourChoise === "rock") {
        incrementYourScore("your-score");
    }
    
    if (yourScore === 3) {
        //Game over, user win
        message ="Congratulitions You Won";
        yourScore = 0;
        computerScore = 0;
        
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("computer-score").innerText = computerScore;

    }
    else if (computerScore === 3) {
        //Game over, computer win
        message = "Game Over";
        yourScore = 0;
        computerScore = 0;
        
        document.getElementById("your-score").innerText = yourScore;
        document.getElementById("computer-score").innerText = computerScore;

    }
    messageDisplay.innerHTML = message;
}


