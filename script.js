let buttonsDOM = document.querySelector('.buttons');
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let computerChoiceDOM = document.querySelector(".computer-choice");
let resultDivDOM = document.querySelector(".result");
let playerScoreDOM = document.querySelector(".player-score");
let computerScoreDOM = document.querySelector(".computer-score");
let gameOverDOM = document.querySelector(".game-over");
let restartBtnDOM = document.querySelector(".restart-btn");

let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    let tools = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3)
    return tools[randomNumber]
};

function playRound(playerSelection, computerSelection) {

    computerChoiceDOM.innerHTML = ("The computer choose: " + computerSelection)

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
        if (computerSelection === "Scissors") {
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
};

function checkTheWinner() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore >= 5) {
            gameOverDOM.innerHTML = "You win the game!"

        }
        else if (computerScore >= 5) {
            gameOverDOM.innerHTML = "The computer win the game!"
        }
        gameOverDOM.classList.add("active");
        restartBtnDOM.classList.add("active");
        buttonsDOM.classList.add("none");
    };
};

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    showPoints();
    gameOverDOM.classList.remove("active")
    restartBtnDOM.classList.remove("active")
    buttonsDOM.classList.remove("none")
    resultDivDOM.innerHTML = "";
    computerChoiceDOM.innerHTML = "";
};

function showPoints() {
    playerScoreDOM.innerHTML = playerScore;
    computerScoreDOM.innerHTML = computerScore;
};

function game(playerSelection) {
    let result = playRound(playerSelection, getComputerChoice())
    if (result === "You win!") {
        resultDivDOM.style.color = "green"
    }
    else if (result === "The computer win!") {
        resultDivDOM.style.color = "red"
    }
    else {
        resultDivDOM.style.color = "gray"
    }
    resultDivDOM.innerHTML = result;
    showPoints();
    checkTheWinner();
};

rockBtn.addEventListener("click", (e) => {
    playerSelection = (e.target.className);
    game(playerSelection);
});
paperBtn.addEventListener("click", (e) => {
    playerSelection = (e.target.className);
    game(playerSelection);
});
scissorsBtn.addEventListener("click", (e) => {
    playerSelection = (e.target.className);
    game(playerSelection);
});

restartBtnDOM.addEventListener("click", () => {
    restartGame();
});
