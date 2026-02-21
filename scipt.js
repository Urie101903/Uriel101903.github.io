let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const message = document.getElementById("message");

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break;
    }
}

function win(user, comp) {
    userScore++;
    userScoreSpan.innerText = userScore;
    message.innerText = `You chose ${user}, Computer chose ${comp}. You Win! 🎉`;
}

function lose(user, comp) {
    compScore++;
    compScoreSpan.innerText = compScore;
    message.innerText = `You chose ${user}, Computer chose ${comp}. You Lose! 😢`;
}

function draw(user, comp) {
    message.innerText = `You chose ${user}, Computer chose ${comp}. It's a Tie! 😐`;
}
