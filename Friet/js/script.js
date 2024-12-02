
let randomNumber = Math.floor(Math.random() * 7) + 1;

let counterTonen = document.getElementById('results');

let imgg = document.getElementsByClassName('deur');

let linker = document.getElementsByClassName('link');

let count = 0;


for (let i = 0; i < imgg.length; i++) {
    linker[i].onclick = function () {
        if (i === randomNumber - 1) {
            imgg[i].src = '../img/gevonden.png'; 
            count++;
            counterTonen.innerHTML = 'gevonden in '+ count +' try';
        } else {
            count++;
        }
    }
}

console.log(randomNumber)