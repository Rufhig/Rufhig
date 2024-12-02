"use strict";

let letters = [];

for (let i = 0; i < 24; i++) {
    letters.push(String.fromCharCode(97 + i));
};

let randomNumber = [];

let randomLength = Math.floor(Math.random() * 5) + 5;

let saus = [];

let randomWord = '';

function randomise() {
    for (let i = 0; i < randomLength; i++) {
        randomNumber[i] = Math.floor(Math.random() * 24);
    };
};

randomise();

for (let i = 0; i < randomLength; i++) {
    saus[i] = letters[randomNumber[i]];
    randomWord += saus[i];
};

let letterInput = document.getElementById('letter');

let buttonRaden = document.getElementById('buttonnn');

let userLetter = document.getElementById('saus');

let count = 0;

let displayWord = new Array(randomLength).fill('_');

let maxAttempts = 10;


function raden(inpppLetter) {
    if (count >= maxAttempts) {
        alert("Game Over! You've reached the maximum number of incorrect guesses.");
       return;
    }

    let guessedCorrectly = false;
    for (let i = 0; i < saus.length; i++) { 
        if (saus[i] === inpppLetter) {
            displayWord[i] = inpppLetter; 
            guessedCorrectly = true; 
            console.log(displayWord);
        }
    }
    userLetter.innerHTML = displayWord.join(' ');
    if (!guessedCorrectly) {
        count++;
        console.log(count)
        if (count >= maxAttempts) {
            alert("Game Over! You've reached the maximum number of incorrect guesses.");
        }
    }
    letterInput.value = '';
    document.querySelector('#fouten').innerHTML ++;
}





   
buttonRaden.onclick = function (event) {
    event.preventDefault(); // Prevent form default behavior if needed 
    let inputLetter = letterInput.value.toLowerCase();
    if (inputLetter.length === 1) {
        raden(letterInput.value);
    };
};


console.log(letters);
console.log(count);
console.log(randomWord);
console.log(saus);
console.log(displayWord);