function playGame(userChoice) {
    const choices = ['rock','paper','scissors']
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';
    if(userChoice=== computerChoice){
        result= "It is a tie match";
    } else if (
        (userChoice === 'rock' && computerChoice==='scissors') ||
        (userChoice=== 'paper' && computerChoice==='rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result= "we won the match";
        playerScore++;
    } else{
        result = "You lose the match";
        computerScore++;
    }
    document.getElementsById("result").innerText= `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById("player-score").innerText=KkScore;
    document.getElementById("computer-score").innerText=SkScore;
    checkwinner();
}
function checkWinner() {
    if (playerScore >= winningScore) {
        document.getElementById("game-status").innerText = "Game Over! You are the Winner!";
        disableButtons();
    } else if (computerScore >= winningScore) {
        document.getElementById("game-status").innerText = "Game Over! Computer Wins!";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll(".choices button").forEach(button => button.disabled = true);
}