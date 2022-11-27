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
const secretNumber = Math.trunc(Math.random()*20) +1;
document.querySelector('.number').textContent = secretNumber;



document.querySelector('.check').addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess')
    .value);
    let score = 20;

    console.log(guess, typeof guess)

    if(!guess){
        document.querySelector('.message').
    textContent = "Você precisa inserir um número! 😂"
    }else if(guess === secretNumber){
        document.querySelector('.message').
        textContent = "✅ Você acertou! 🥳";
        score++;
        document.querySelector('.score')
        .textContent = score;
    }
    else if(guess > secretNumber){
        document.querySelector('.message').
        textContent = "📈 Muito acima!"
        score--;
        document.querySelector('.score')
        .textContent = score;
    }
    else if(guess < secretNumber){
        document.querySelector('.message').
        textContent = "📉 Muito abaixo!"
        score--;
        document.querySelector('.score')
        .textContent = score;
    }
});
