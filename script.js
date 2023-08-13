let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    let tools = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3)
    return tools[randomNumber]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== "rock") {
        if (playerSelection !== "paper") {
            if (playerSelection !== "scissors") {
                return "You can't choose this one!"
            }
        }
    }
    else if (playerSelection === undefined && playerSelection === null) {
        return "You should pick something!"
    }
    console.log("The computer choose: " + computerSelection)
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            return "Draw"
        }
        else if (computerSelection === "Paper") {
            computerScore = computerScore + 1;
            return "The computer win!"
        }
        else if (computerSelection === "Scissors") {
            playerScore = playerScore + 1;
            return "You win!"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            return "Draw"
        }
        else if (computerSelection === "Scissors") {
            computerScore = computerScore + 1;
            return "The computer win!"
        }
        else if (computerSelection === "Rock") {
            playerScore = playerScore + 1;
            return "You win!"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "Draw"
        }
        else if (computerSelection === "Rock") {
            computerScore = computerScore + 1;
            return "The computer win!"
        }
        else if (computerSelection === "Paper") {
            playerScore = playerScore + 1;
            return "You win!"
        }
    }
}

function game() {
    for (let i = 5; i > 0; i--) {
        console.log(playRound(prompt("Choose something!"), getComputerChoice()))
    }
    if (playerScore > computerScore) {
        console.log("You win the game!")
    }
    else if (playerScore === computerScore) {
        console.log("Draw")
    }
    else {
        console.log("The computer win the game")
    }
}

game();
