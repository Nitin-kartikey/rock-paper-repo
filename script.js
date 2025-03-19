let kkScore = 0;
let skScore = 0;
let movesLeft = 5;
function playGame(kkChoice) {
    if (movesLeft === 0) return;
    const choices = ['rock', 'paper', 'scissors'];
    const skChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';
    if (kkChoice === skChoice) {
        result = "It's a tie!";
    } else if (
        (kkChoice === 'rock' && skChoice === 'scissors') ||
        (kkChoice === 'paper' && skChoice === 'rock') ||
        (kkChoice === 'scissors' && skChoice === 'paper')
    ) {
        result = "KK won the match!";
        kkScore++;
    } else {
        result = "SK won the match!";
        skScore++;
    }  
    movesLeft--;
    document.getElementById("result").innerText = 
        `KK chose ${kkChoice}, SK chose ${skChoice}. ${result}`;
    document.getElementById("kk-score").innerText = kkScore;
    document.getElementById("sk-score").innerText = skScore;
    document.getElementById("moves-left").innerText = movesLeft;
    checkWinner();
}
function checkWinner() {
    if (movesLeft === 0) {
        if (kkScore > skScore) {
            document.getElementById("game-status").innerText = "Game Over! KK Wins!";
        } else if (kkScore < skScore) {
            document.getElementById("game-status").innerText = "Game Over! SK Wins!";
        } else {
            document.getElementById("game-status").innerText = "Game Over! It's a Draw!";
        }
        disableButtons();
    }
}
function disableButtons() {
    document.querySelectorAll(".choices button").forEach(button => button.disabled = true);
}
