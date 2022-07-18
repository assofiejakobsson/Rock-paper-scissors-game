//Variables

const computerChoiseDisplay = document.getElementById("computer-choise");
const yourChoiseDisplay = document.getElementById("your-choise");
const resultDisplay = document.getElementById("result");
const allGameChoise = document.querySelectorAll("button");
let yourChoise
let computerChoise
let result

//Grab all choise btn and functions for the users and computers choise

allGameChoise.forEach(allGameChoise => allGameChoise.addEventListener('click', (e) => {
    yourChoise = e.target.id
    yourChoiseDisplay.innerHTML = yourChoise
    generateComputerChoise()
    getResult()
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

function getResult() {
    if (computerChoise === yourChoise) {
        result = "It's a draw"
    }
    if (computerChoise === "rock" && yourChoise === "paper") {
        result = "You win"
    }
    if (computerChoise === "rock" && yourChoise === "scissor") {
        result = "You lose"
    }
    if (computerChoise === "paper" && yourChoise === "scissor") {
        result = "You win"
    }
    if (computerChoise === "paper" && yourChoise === "rock") {
        result = "You win"
    }
    if (computerChoise === "scissor" && yourChoise === "paper") {
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}
