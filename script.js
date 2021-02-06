let target = document.getElementById("target");
let roundResultText = document.getElementById("round-result");
let roundWinningText = document.getElementById("rwin");
let totalWinningText = document.getElementById("totwin");

let betTotal = 0;
let roundWinnings = 0;
let totalWinnings = 0;


function coinFlip () {
    let coinVal = Math.floor(Math.random() * 2);
    if (coinVal === 1) {
        return 'Heads';
    } else {
        return 'Tails';
    }
    target.innerHTML = 'Flip Again'
}

function getGuess () {
    const guessValues = document.querySelectorAll('input[name="guess"]');
    let guess
    for (const guessChoice of guessValues) {
        if (guessChoice.checked) {
            guess = guessChoice.value;
            return guess;
        }
    }   
}


function playGame () {
    let targetResult = coinFlip();
    let playerGuess = getGuess();
    if (playerGuess === undefined) {
        roundResultText.innerHTML = `You have to make a guess`;
        roundResultText.style.visibility = 'visible';
        return 'invalid';
    }
    let playerBet = document.getElementById("bet").value;
    if (playerBet > 0) {
        betTotal += playerBet;
        if (targetResult === playerGuess) {
            roundWinnings = playerBet * 1.5;
            let formattedRoundWinnings = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(roundWinnings);
            roundWinningText.innerHTML = `Winnings this round: ${formattedRoundWinnings}`;
            totalWinnings += (roundWinnings * 1);
            let formattedTotalWinnings = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(totalWinnings);
            totalWinningText.innerHTML = `Total Winnings: ${formattedTotalWinnings}`;
            roundResultText.innerHTML = `${targetResult} - You won!`;
            roundResultText.style.visibility = 'visible';
        } else {
            roundResultText.innerHTML = `${targetResult} - You Lost!`;
            roundResultText.style.visibility = 'visible';
        }
    } else if (playerBet === 0) {
        roundResultText.innerHTML = `You have to bet first`;
        roundResultText.style.visibility = 'visible';
        return 'invalid';
    } else {
        roundResultText.innerHTML = `You can't bet a negative amount`;
        roundResultText.style.visibility = 'visible';
        return 'invalid';
    }

}

function focusOn () {
    target.style.backgroundColor = 'hsl(30 100% 50%)';
    roundResultText.style.visibility = 'hidden'
}

function focusOff () {
    target.style.backgroundColor = 'hsl(30 50% 80%)';
}

target.addEventListener('click',playGame);
target.addEventListener('mouseenter',focusOn);
target.addEventListener('mouseleave',focusOff);