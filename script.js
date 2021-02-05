let target = document.getElementById("target");
let text = document.getElementById('text');

let coinFlip = function () {
    let coinVal = Math.floor(Math.random() * 2);
    if (coinVal === 1) {
        text.innerHTML = 'Heads';
    } else {
        text.innerHTML = 'Tails';
    }
}

target.addEventListener('click',coinFlip);