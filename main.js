function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return 'Rock';
    } else if (computerChoice === 2) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie :|";
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')) {
        return `You win! ${playerSelection} beats ${computerSelection} :)`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection} :(`;
    }
}

function finalMessage(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You are the BIG WINNER!";
    } else if (computerScore > playerScore) {
        return "Sorry, you lose!";
    } else {
        return "Look, it's a TIE D:";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = window.prompt("Choose between Rock, Paper or Scissor:");
        const computerSelection = computerPlay();

        const roundChecker = playRound(capitalize(playerSelection), computerSelection);

        if (roundChecker.search("win") > 0) {
            playerScore += 1;
        } else if (roundChecker.search("lose") > 0) {
            computerScore += 1;
        }

        console.log(`${roundChecker}\nYOU ${playerScore} x ${computerScore} MACHINES\n\n`);
    }

    return finalMessage(playerScore, computerScore);
}

let choices = document.querySelectorAll('.toChoose');
let choicesArray = Array.prototype.slice.call(choices);

choicesArray.forEach(c => c.addEventListener("mouseover", function (element) {
    const choosenID = c.getAttribute('id');
    const playerImg = document.getElementById('playerImage');
    playerImg.setAttribute('src', `${c.getAttribute('src')}`);
})
);
