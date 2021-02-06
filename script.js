let target = document.getElementById("target");
let mainText = document.getElementById('text');


function coinFlip () {
    let coinVal = Math.floor(Math.random() * 2);
    if (coinVal === 1) {
        mainText.innerHTML = 'Heads';
    } else {
        text.innerHTML = 'Tails';
    }
    target.innerHTML = 'Flip Again'
}

function focusOn () {
    target.style.backgroundColor = 'hsl(30 100% 50%)';
}

function focusOff () {
    target.style.backgroundColor = 'hsl(30 50% 80%)';
}

target.addEventListener('click',coinFlip);
target.addEventListener('mouseenter',focusOn);
target.addEventListener('mouseleave',focusOff);