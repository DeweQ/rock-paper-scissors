const hands = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;
console.log(hands.indexOf('rock'));

function getComputerChoice() {
    let choice = getRandomNumber(0, 3);
    return hands[choice];
}

function getHumanChoice() {
    return prompt("Choose your hand! Type 'rock', 'paper' or 'scissors'.");
}

function playRound(humanChoice, computerChoice) {
    let humanWin = () => {
        console.log("You win!");
        humanScore++;
        return;
    }
    let computerWin = () => {
        console.log("You lose!")
        computerScore++;
        return
    }
    let humanChoiceInsensitive = humanChoice.toLowerCase();
    if (humanChoiceInsensitive === computerChoice) {
        console.log("It's a draw!");
        return;
    }
    switch (humanChoiceInsensitive) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    computerWin();
                    break;
                case "scissors":
                    humanWin();
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanWin();
                    break;
                case "scissors":
                    computerWin();
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "paper":
                    humanWin();
                    break;
                case "rock":
                    computerWin();
                    break;
            }
            break;
    }
    // if (hands.indexOf(humanChoice) > hands.indexOf(computerChoice) $$
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}
// for (let i = 1;i<10;i++) 
//     console.log(getComputerChoice());