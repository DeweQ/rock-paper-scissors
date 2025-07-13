const hands = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = getRandomNumber(0, 3);
    return hands[choice];
}

function getHumanChoice() {
    return prompt("Choose your hand! Type 'rock', 'paper' or 'scissors'.");
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    console.log("!!!NEW GAME!!!")

    for (let i = 0; i < 5; i++) {
        console.log(`New round begins!
            Current scores: You - ${humanScore}, Computer = ${computerScore}`);
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Final scores: You - ${humanScore}, Computer - ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("You lose. Try again.");
    } else {
        console.log("Is that a draw?!");
    }

    function playRound(humanChoice, computerChoice) {
        let humanChoiceInsensitive = humanChoice.toLowerCase();
        let humanWin = () => {
            console.log(`You win! "${humanChoiceInsensitive}" beats "${computerChoice}."`);
            humanScore++;
            return;
        }
        let computerWin = () => {
            console.log(`You lose! "${computerChoice}" beats "${humanChoiceInsensitive}."`)
            computerScore++;
            return
        }
        if (humanChoiceInsensitive === computerChoice) {
            console.log(`It's a draw! Both players got ${computerChoice}`);
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
                default:
                    console.log("");
                    computerScore++;    
                    break;
        }
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}
// for (let i = 1;i<10;i++) 
//     console.log(getComputerChoice());