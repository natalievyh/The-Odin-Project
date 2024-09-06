let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors: ");
    return choice.toLowerCase(); 
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                console.log("Draw!");
                break;
            case "paper":
                computerScore++;
                console.log("You lose! Paper beats rock");
                break;
            case "scissors":
                humanScore++;
                console.log("You win! Rock beats scissors");
                break;
        }
    } else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                humanScore++;
                console.log("You win! Paper beats rock");
                break;
            case "paper":
                console.log("Draw!");
                break;
            case "scissors":
                computerScore++;
                console.log("You lose! Rock beats scissors");
                break;
        }
    } else {
        switch(computerChoice) {
            case "rock":
                computerScore++;
                console.log("You lose! Rock beats scissors");
                break;
            case "paper":
                humanScore++;
                console.log("You win! Scissors beats paper");
                break;
            case "scissors":
                console.log("Draw!");
                break;
        }
    }
    console.log(`Score: ${humanScore} - ${computerScore}`);
}

function announceResults(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("Game Over: You win!");
    } else if (computerScore > humanScore) {
        console.log("Game Over: You lose!");
    } else {
        console.log("Game Over: Draw!");
    }
    console.log(`Final score: ${humanScore} - ${computerScore}`);
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    announceResults(humanScore, computerScore);

}

playGame();