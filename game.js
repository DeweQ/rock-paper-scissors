const hands = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

const playersButtonsContainer = document.querySelector(".hands");
const scoreDiv = document.querySelector("#score");
playersButtonsContainer.addEventListener("click", e => playRound(e.target.id, getComputerChoice()));
playersButtonsContainer.addEventListener("click", () => scoreDiv.textContent = `Current scores: You - ${humanScore}, Computer = ${computerScore}`);
playersButtonsContainer.addEventListener("click", () => winConditionChecker());
const roundResultDiv = document.querySelector("#roundResult");

function playRound(humanChoice, computerChoice) {
    let humanChoiceInsensitive = humanChoice.toLowerCase();
    let humanWin = () => {
        roundResultDiv.textContent = `You win! "${humanChoiceInsensitive}" beats "${computerChoice}."`;
        humanScore++;
        return;
    }
    let computerWin = () => {
        roundResultDiv.textContent = `You lose! "${computerChoice}" beats "${humanChoiceInsensitive}."`;
        computerScore++;
        return;
    }
    if (humanChoiceInsensitive === computerChoice) {
        roundResultDiv.textContent = `It's a draw! Both players got ${computerChoice}`;
        return;
    }
    if (hands.indexOf(humanChoiceInsensitive) == -1) {
        roundResultDiv.textContent = `What an interesting weapon you got. A "${humanChoice}"! Unfortunately, it's a loss for you.`;
        computerScore++;
        return;
    }
    let humanChoiceIndex = hands.indexOf(humanChoiceInsensitive);
    let computerChoiceIndex = hands.indexOf(computerChoice);
    if (humanChoiceIndex == (computerChoiceIndex + 1) % 3)
        humanWin();
    else computerWin();
}

function winConditionChecker() {
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

function getHumanChoice() {
    return prompt("Choose your hand! Type 'rock', 'paper' or 'scissors'.");
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}