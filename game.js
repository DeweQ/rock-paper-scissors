const hands = ["rock", "paper", "scissors"];

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
// for (let i = 1;i<10;i++) 
//     console.log(getComputerChoice());