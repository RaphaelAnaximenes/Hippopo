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
let score = 20;


document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess')
    .value);


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
        if(score > 1){
        document.querySelector('.message').
        textContent = "📈 Muito acima!"
        score--;
        document.querySelector('.score')
        .textContent = score;
        }else{
        document.querySelector('.score')
        .textContent = 0;
        document.querySelector('.message').
        textContent = "❌ GAME OVER ❌"
        }
    }
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').
            textContent = "📉 Muito abaixo!"
            score--;
            document.querySelector('.score')
            .textContent = score;
        }else{
            document.querySelector('.score')
            .textContent = 0;
            document.querySelector('.message').
            textContent = "❌ GAME OVER ❌"
        }
    }
});
