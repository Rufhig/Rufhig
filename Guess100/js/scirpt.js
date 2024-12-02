const attempt = document.querySelector('.attempt');
const inpNum = document.querySelector('input');
let number = Math.floor(Math.random() * 101);
const btnGuess = document.querySelector('.guess');
const winMsg = document.querySelector('.win');
const loseMsg = document.querySelector('.lose');
const msgHigh = document.querySelector('.high');
const msgLow = document.querySelector('.low');
const btnReset = document.querySelector('.reset');
let displayNumber = document.querySelector('.number');
console.log(number);
let attempts = 0;



btnGuess.addEventListener('click', function() {
    const inpGuess = parseInt(inpNum.value);
    if( inpGuess === number && attempts < 10){
        winMsg.classList.add('show');
        msgLow.classList.remove('show');
        msgHigh.classList.remove('show');
        loseMsg.classList.remove('show');
        inpNum.disabled = true;
    }
    else if(inpGuess < number && attempts < 10){
        msgLow.classList.add('show');
        msgHigh.classList.remove('show');
        loseMsg.classList.remove('show');
    }
    else if(inpGuess > number && attempts < 10){
        msgHigh.classList.add('show');
        msgLow.classList.remove('show');
        loseMsg.classList.remove('show');
    }
    attempts++;
    attempt.innerHTML = attempts;
    if (attempts === 10 && inpGuess !== number){
        loseMsg.classList.add('show');
        msgHigh.classList.remove('show');
        msgLow.classList.remove('show');
        displayNumber.innerHTML = number;
        displayNumber.classList.add('show');
        inpNum.disabled = true;
        btnGuess.disabled = true;
    }

})

btnReset.addEventListener('click', function(){
    number = Math.floor(Math.random() * 101);
    inpNum.disabled = false;
    btnGuess.disabled = false;
    loseMsg.classList.remove('show');
    winMsg.classList.remove('show')
    attempt.innerHTML = '';
    console.log(number);
    attempts = 0;
})
