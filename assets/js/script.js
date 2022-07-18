//Variables

const computerChoiseDisplay = document.getElementById("computer-choise");
const yourChoiseDisplay = document.getElementById("your-choise");
const messageDisplay = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const allGameChoise = document.querySelectorAll("button");
let yourChoise
let computerChoise
let message
let yourScore

//Grab all choise btn and functions for the users and computers choise

allGameChoise.forEach(allGameChoise => allGameChoise.addEventListener('click', (e) => {
    yourChoise = e.target.id
    yourChoiseDisplay.innerHTML = yourChoise
    generateComputerChoise()
    getMessage()
    getScore()
}))

// Funktion for computer choise

function generateComputerChoise() {
    let randomNumber = Math.floor(Math.random() * allGameChoise.length) + 1

    if (randomNumber === 1) {
        computerChoise = 'rock'
    }
    if (randomNumber === 2) {
        computerChoise = 'scissor'
    }
    if (randomNumber === 3) {
        computerChoise = 'paper'
    }
    computerChoiseDisplay.innerHTML = computerChoise
}

// Funktion for the result between winner and loser

function getMessage() {
    if (computerChoise === yourChoise) {
        message = "It's a draw"
    }
    if (computerChoise === "rock" && yourChoise === "paper") {
        message = "You win"
        
    }
    if (computerChoise === "rock" && yourChoise === "scissor") {
        message = "You lose"
    }
    if (computerChoise === "paper" && yourChoise === "scissor") {
        message = "You win"
        
    }
    if (computerChoise === "paper" && yourChoise === "rock") {
        message = "You win"
        
    }
    if (computerChoise === "scissor" && yourChoise === "paper") {
        message = "You lose"
    }
    if (computerChoise === "scissor" && yourChoise === "rock") {
        message = "You win"
        
    messageDisplay.innerHTML = message
}

function incrementYourScore() {
    let startScore = parseInt(document.getElementById("your-score").innerText);
    document.getElementById("your-score").innerText = ++startScore;
}

function incrementComputerScore() {
    let startScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++startScore;
}



function getScore() {
    
    if (computerChoise === yourChoise) {
        
    }
    if (computerChoise === "rock" && yourChoise === "paper") {
        incrementYourScore("your-score")
    }
    if (computerChoise === "rock" && yourChoise === "scissor") {
        incrementComputerScore("computer-score")
    }
    if (computerChoise === "paper" && yourChoise === "scissor") {
        incrementYourScore("your-score")
    }
    if (computerChoise === "paper" && yourChoise === "rock") {
        incrementComputerScore("computer-score")
    }
    if (computerChoise === "scissor" && yourChoise === "paper") {
        incrementComputerScore("computer-score")
    }
    if (computerChoise === "scissor" && yourChoise === "rock") {
        incrementYourScore("your-score")
    }
    
}
