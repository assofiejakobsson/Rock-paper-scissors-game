//Variables

const computerChoiseDisplay = document.getElementById("computer-choise");
const yourChoiseDisplay = document.getElementById("your-choise");
const resultDisplay = document.getElementById("result");
const allGameChoise = document.querySelectorAll("button");
let yourChoise
let computerChoise

//Grab all choise btn and functions for the users and computers choise

allGameChoise.forEach(allGameChoise => allGameChoise.addEventListener('click', (e) => {
    yourChoise = e.target.id
    yourChoiseDisplay.innerHTML = yourChoise
    generateComputerChoise()
}))

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