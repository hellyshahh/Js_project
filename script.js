let player1Name = "Player 1";
let player2Name = "Computer";
let gameMode = "computer";
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
let player1Choice = "";
let player2Choice = "";

function togglePlayer2Input() {
    let mode = document.getElementById("gameMode").value;
    document.getElementById("player2Input").style.display = mode === "friend" ? "block" : "none";
}

function startGame() {
    player1Name = document.getElementById("player1Name").value || "Player 1";
    gameMode = document.getElementById("gameMode").value;
    player2Name = gameMode === "friend" ? document.getElementById("player2Name").value || "Player 2" : "Computer";

    document.getElementById("player1Display").innerText = player1Name;
    document.getElementById("player2Display").innerText = player2Name;

    document.getElementById("player2Section").style.display = gameMode === "friend" ? "block" : "none";

    document.querySelector(".setup-container").style.display = "none";
    document.querySelector(".game-container").style.display = "block";
}

function playGame(choice, player) {
    if (playerScore >= maxScore || computerScore >= maxScore) return;

    if (player === 1) {
        player1Choice = choice;
        if (gameMode === "computer") {
            let choices = ["Rock", "Paper", "Scissors"];
            player2Choice = choices[Math.floor(Math.random() * 3)];
        }
    } else {
        player2Choice = choice;
    }

    if (player1Choice && player2Choice) {
        checkWinner();
    }
}

function checkWinner() {
    let resultText = "";

    if (player1Choice === player2Choice) {
        resultText = "It's a tie!";
    } else if (
        (player1Choice === "Rock" && player2Choice === "Scissors") ||
        (player1Choice === "Paper" && player2Choice === "Rock") ||
        (player1Choice === "Scissors" && player2Choice === "Paper")
    ) {
        resultText = `${player1Name} wins this round!`;
        playerScore++;
    } else {
        resultText = `${player2Name} wins this round!`;
        computerScore++;
    }

    document.querySelector(".result").innerText = resultText;
    document.getElementById("player1Score").innerText = playerScore;
    document.getElementById("player2Score").innerText = computerScore;

    if (playerScore === maxScore || computerScore === maxScore) {
        alert(`${playerScore === maxScore ? player1Name : player2Name} wins the game!`);
        document.querySelector(".reset-btn").style.display = "block";
    }

    player1Choice = "";
    player2Choice = "";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player1Score").innerText = "0";
    document.getElementById("player2Score").innerText = "0";
    document.querySelector(".result").innerText = "Waiting for moves...";
    document.querySelector(".reset-btn").style.display = "none";
}
