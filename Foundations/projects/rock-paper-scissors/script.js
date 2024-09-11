let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const rock = document.createElement("button");
rock.textContent = "rock";
const paper = document.createElement("button");
paper.textContent = "paper";
const scissors = document.createElement("button");
scissors.textContent = "scissors";
const replay = document.createElement("h1");
replay.textContent = "Play Again?";
const yesBtn = document.createElement("button");
yesBtn.textContent = "YES";
const results = document.createElement("div");

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(results);

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                results.textContent = "Draw!";
                break;
            case "paper":
                computerScore++;
                results.textContent = "You lose! Paper beats rock";
                break;
            case "scissors":
                humanScore++;
                results.textContent = "You win! Rock beats scissors";
                break;
        }
    } else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                humanScore++;
                results.textContent = "You win! Paper beats rock";
                break;
            case "paper":
                results.textContent = "Draw!";
                break;
            case "scissors":
                computerScore++;
                results.textContent = "You lose! Rock beats scissors";
                break;
        }
    } else {
        switch(computerChoice) {
            case "rock":
                computerScore++;
                results.textContent = "You lose! Rock beats scissors";
                break;
            case "paper":
                humanScore++;
                results.textContent = "You win! Scissors beats paper";
                break;
            case "scissors":
                results.textContent = "Draw!";
                break;
        }
    }
    const score = document.createElement("p");
    score.textContent = `Score: ${humanScore} - ${computerScore}`;
    results.appendChild(score);
}

function announceResults(humanScore, computerScore) {
    results.appendChild(document.createElement("p"));
    if (humanScore > computerScore) {
        results.textContent = "Game Over: You win!";
    } else if (computerScore > humanScore) {
        results.textContent = "Game Over: You lose!";
    } else {
        results.textContent = "Game Over: Draw!";
    }
    const finalScore = document.createElement("p");
    finalScore.textContent = `Final score: ${humanScore} - ${computerScore}`;
    results.appendChild(finalScore);
}

function playAgain() {
    rock.remove();
    paper.remove();
    scissors.remove();
    body.appendChild(replay);
    body.appendChild(yesBtn);
    yesBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        replay.remove();
        yesBtn.remove();
        results.remove();
        results.textContent = "";
        body.appendChild(rock);
        body.appendChild(paper);
        body.appendChild(scissors);
        body.appendChild(results);
    })
}

function checkGameOver() {
    if ((humanScore === 5) || (computerScore === 5)) {
        announceResults(humanScore, computerScore);
        playAgain();
    }
}

function playGame() {

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        checkGameOver();
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        checkGameOver();
    });
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        checkGameOver();
    });

}

playGame();