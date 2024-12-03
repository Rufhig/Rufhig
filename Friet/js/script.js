
const randomNumber = Math.floor(Math.random() * 7);

const counterTonen = document.querySelector('#results');

const imgg = document.querySelectorAll('.deur');

const linker = document.querySelectorAll('.link');

let count = 0;


for (let i = 0; i < imgg.length; i++){
    imgg[i].src = 'img/deurtoe.png'
}
    

for (let i = 0; i < imgg.length; i++) {
    linker[i].addEventListener('click',function () {
        if (i === randomNumber) {
            imgg[i].src = 'img/gevonden.png';
            count++;
            counterTonen.innerHTML = 'gevonden in '+ count +' try';
        } else if (i != randomNumber){
            imgg[i].src = 'img/deuropen.png'
            count++;
        }
    }

)}

console.log(randomNumber)