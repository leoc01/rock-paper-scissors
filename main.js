function capitalize( someString ) {
    return ( someString[0].toUpperCase() + someString.slice(1).toLowerCase() );
}

function computerPlay () {
    let computerChoice = Math.floor(Math.random() * 3) +1;

    if ( computerChoice === 1 ) {
        return 'Rock';
    } else if ( computerChoice === 2 ) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

function playRound( playerSelection, computerSelection ) {
    if ( playerSelection === computerSelection ) {
        return "It's a tie :|";
    } else if ( (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
                    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                    (playerSelection === 'Scissor' && computerSelection === 'Paper') ) {
                        return `You win! ${playerSelection} beats ${computerSelection} :)`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection} :(`;
    }
}

function finalMessage( playerScore, computerScore ) {
    if ( playerScore > computerScore )  {
        return "You are the BIG WINNER!";
    } else if ( computerScore > playerScore ) {
        return "Sorry, you lose!";
    } else {
        return "Look, it's a TIE D:";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while ( playerScore < 3 && computerScore < 3 ) {
        const playerSelection = window.prompt("Choose between Rock, Paper or Scissor:");
        const computerSelection = computerPlay();

        const roundChecker = playRound( capitalize( playerSelection ), computerSelection );

        if ( roundChecker.search("win") > 0 ) {
            playerScore += 1;
        } else if ( roundChecker.search("lose") > 0 ) {
            computerScore += 1;
        }

        console.log( `${roundChecker}\nYOU ${playerScore} x ${computerScore} MACHINES\n\n` );
    }

    return finalMessage( playerScore, computerScore );
}

console.log( game() );