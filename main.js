//random computer play
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

//return results for each round
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

//change between start button and reset button
function changeButton() {
    if (startGame.style.display !== "none") {
        startGame.style.display = "none";
        resetGame.style.display = "inline-block";
    }
}

//start the game
function gameOn(playerScore, computerScore, first) {
    if(first) {
        changeButton();
    }

    let givePoint = '';

    //reset button 
    resetGame.addEventListener('click', function () {
        body.style.backgroundColor = 'black';
        resetGame.innerHTML = 'Restart Game';
        choicesArray.forEach(c => c.style.display = "inline-block");
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = 0;
        computerScoreDisplay.innerHTML = 0;
        computerScoreDisplay.innerHTML = 0;
        defaultImage = 'images/Back.png';
        computerImage.setAttribute('src', defaultImage);
        playerImage.setAttribute('src', defaultImage);
        computerImage.setAttribute('class', 'waiting');
        playerImage.setAttribute('class', 'waiting');
        return;
    });

    //put the image on players side on mouse hover
    choicesArray.forEach(c => c.addEventListener("mouseover", function (e) {
        playerImage.setAttribute('src', `${c.getAttribute('src')}`);
    })
    );

    //back the image to default on mouse out
    choicesArray.forEach(c => c.addEventListener("mouseout", function (e) {
        playerImage.setAttribute('src', defaultImage);
    })
    );

    //each click, run the game to give points and change styles
    choicesArray.forEach(c => c.addEventListener("click", function (e) {
        let playerSelection = c.getAttribute('id');
        defaultImage = `images/${playerSelection}.png`;
        givePoint = playRound( playerSelection, computerPlay() );
        if (givePoint === 'Win') {
            playerScore += 1;
            playerScoreDisplay.innerHTML = playerScore;
            playerImage.setAttribute('class', 'waiting win');
            computerImage.setAttribute('class', 'waiting lose');
        } else if (givePoint ==='Lose') {
            computerScore += 1;
            computerScoreDisplay.innerHTML = computerScore;
            computerImage.setAttribute('class', 'waiting win');
            playerImage.setAttribute('class', 'waiting lose');
        } else {
            computerImage.setAttribute('class', 'waiting tie');
            playerImage.setAttribute('class', 'waiting tie');
        }

        //check for a winner
        if(playerScore>=5 || computerScore>=5 ){
            if(playerScore>computerScore){
                resetGame.innerHTML = 'YOU WIN!<br>Click to restart';
                body.style.backgroundColor = '#116911';
            } else {
                resetGame.innerHTML = 'YOU LOSE!<br>Click to restart';
                body.style.backgroundColor = '#691111';
            }
            choicesArray.forEach(c => c.style.display = "none");
        }
    })
    );

    return;
}

let playerScore = 0;
let computerScore = 0;
let defaultImage = 'images/Back.png';

const body = document.querySelector('body');

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

const computerImage = document.getElementById('computerImage');
const playerImage = document.getElementById('playerImage');

const startGame = document.getElementById('startGame');
const resetGame = document.getElementById('resetGame');

let choices = document.querySelectorAll('.toChoose');
let choicesArray = Array.prototype.slice.call(choices);

//start button function
startGame.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    choicesArray.forEach(c => c.style.display = "inline-block");
    gameOn(playerScore, computerScore, true);
});