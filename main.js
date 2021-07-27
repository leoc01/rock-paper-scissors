function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerImage.setAttribute('src', `images/Rock.png`);
        return 'Rock';
    } else if (computerChoice === 2) {
        computerImage.setAttribute('src', `images/Paper.png`);
        return 'Paper';
    } else {
        computerImage.setAttribute('src', `images/Scissor.png`);
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')) {
        return 'Win';
    } else {
        return 'Lose';
    }
}

function gameOn(playerScore, computerScore, first) {
    if(first) {
        changeButton();
    }

    let givePoint = '';

    resetGame.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = 0;
        computerScoreDisplay.innerHTML = 0;
        computerScoreDisplay.innerHTML = 0;
        defaultImage = 'images/Back.png';
        computerImage.setAttribute('src', defaultImage);
        playerImage.setAttribute('src', defaultImage);
        return;
    });

    let choices = document.querySelectorAll('.toChoose');
    let choicesArray = Array.prototype.slice.call(choices);


    choicesArray.forEach(c => c.addEventListener("mouseover", function (e) {
        playerImage.setAttribute('src', `${c.getAttribute('src')}`);
        console.log('hover');
    })
    );

    choicesArray.forEach(c => c.addEventListener("mouseout", function (e) {
        playerImage.setAttribute('src', defaultImage);
        console.log('hover');
    })
    );

    choicesArray.forEach(c => c.addEventListener("click", function (e) {
        let playerSelection = c.getAttribute('id');
        defaultImage = `images/${playerSelection}.png`;
        givePoint = playRound( playerSelection, computerPlay() );
        if (givePoint === 'Win') {
            playerScore += 1;
            playerScoreDisplay.innerHTML = playerScore;
        } else if (givePoint ==='Lose') {
            computerScore += 1;
            computerScoreDisplay.innerHTML = computerScore;
        }
    })
    );

    return;
}

function changeButton() {
    if (startGame.style.display !== "none") {
        startGame.style.display = "none";
        resetGame.style.display = "inline-block";
    }
}

let playerScore = 0;
let computerScore = 0;
let defaultImage = 'images/Back.png';

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

const computerImage = document.getElementById('computerImage');
const playerImage = document.getElementById('playerImage');

const startGame = document.getElementById('startGame');
const resetGame = document.getElementById('resetGame');

startGame.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    gameOn(playerScore, computerScore, true);
});