const hands = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

const playersButtonsContainer = document.querySelector(".hands");
const scoreDiv = document.querySelector("#score");
playersButtonsContainer.addEventListener("click", e => {
    if (e.target.id)
        playRound(e.target.id, getComputerChoice());
});
playersButtonsContainer.addEventListener("click", () => scoreDiv.textContent = `Current scores: You - ${humanScore}, Computer = ${computerScore}`);
playersButtonsContainer.addEventListener("click", () => winConditionChecker());
const roundResultDiv = document.querySelector("#roundResult");

function playRound(humanChoice, computerChoice) {
    let humanWin = () => {
        roundResultDiv.textContent = `You win! "${humanChoice}" beats "${computerChoice}."`;
        humanScore++;
        return;
    }
    let computerWin = () => {
        roundResultDiv.textContent = `You lose! "${computerChoice}" beats "${humanChoice}."`;
        computerScore++;
        return;
    }
    if (humanChoice === computerChoice) {
        roundResultDiv.textContent = `It's a draw! Both players got ${computerChoice}`;
        return;
    }

    let humanChoiceIndex = hands.indexOf(humanChoice);
    let computerChoiceIndex = hands.indexOf(computerChoice);
    if (humanChoiceIndex == (computerChoiceIndex + 1) % 3)
        humanWin();
    else computerWin();
}

async function winConditionChecker() {
    await new Promise(r => setTimeout(r, 100));
    if (humanScore >= 5)
        alert("!!!YOU WIN!!!");
    if (computerScore >= 5)
        alert("!!!YOU LOSE!!!");
    else if (humanScore < 5)
        return;
    humanScore = 0;
    computerScore = 0;
    roundResultDiv.textContent = "";
    scoreDiv.textContent = "";
}

function getComputerChoice() {
    let choice = getRandomNumber(0, 3);
    return hands[choice];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}