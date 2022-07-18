const computerChoiseDisplay = document.getElementById("computer-choise");
const yourChoiseDisplay = document.getElementById("your-choise");
const resultDisplay = document.getElementById("result");
const allGameChoise = document.querySelectorAll("button");
let yourChoise

allGameChoise.forEach(allGameChoise => allGameChoise.addEventListener('click', (e) => {
    yourChoise = e.target.id
    yourChoiseDisplay.innerHTML = yourChoise
}))