'use strict'
/*
console.log(document.querySelector('.message').
textContent);


    document.querySelector('.message').
    textContent = "🎊 Você acertou! 🥳";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess')
    .value);
    console.log(guess, typeof guess)

    if(!guess){
        document.querySelector('.message').
    textContent = "Você precisa inserir um número 😂"
    }
});
