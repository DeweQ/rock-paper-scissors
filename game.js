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
        console.log("You lost. Try again.");
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
            return;
        }
        if (humanChoiceInsensitive === computerChoice) {
            console.log(`It's a draw! Both players got ${computerChoice}`);
            return;
        }
        if (hands.indexOf(humanChoiceInsensitive) == -1) {
            console.log(`What an interesting weapon you got. A "${humanChoice}"! Unfortunately, it's a loss for you.`);
            computerScore++;
            return;
        }
        let humanChoiceIndex = hands.indexOf(humanChoiceInsensitive);
        let computerChoiceIndex = hands.indexOf(computerChoice);
        if (humanChoiceIndex == (computerChoiceIndex + 1) % 3)
            humanWin();
        else computerWin();
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}