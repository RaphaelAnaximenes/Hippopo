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
let secretNumber = Math.trunc(Math.random()*20) +1;

let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').
    textContent = message;
}


document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess')
    .value);


    console.log(guess, typeof guess)

    

/* Guessing related events:*/
 //when there is no input
if(!guess){
    displayMessage("Você precisa inserir um número! 😂")
    
    //When player wins
    }else if(guess === secretNumber){
        displayMessage("✅ Você acertou! 🥳");
        score++;
        document.querySelector('.score')
        .textContent = score;

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').
            textContent= highscore;
            }
    }
    // when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
              displayMessage(guess > secretNumber ? "📈 Muito acima!" : "📉 Muito abaixo!");
            score--;
            document.querySelector('.score')
            .textContent = score;
            }else{
            document.querySelector('.score')
            .textContent = 0;
            displayMessage("❌ GAME OVER ❌");
            document.querySelector('body').style.backgroundColor = '#722F37';
        }


    }
    });

// Again button 

document.querySelector('.again').addEventListener
('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    
    displayMessage("Quer tentar novamente? Boa sorte!");
    document.querySelector('.score')
    .textContent = score;
    document.querySelector('.number')
    .textContent = '?';
    document.querySelector('.number')
    .style.width = '15rem';
    document.querySelector('.guess').value= undefined;
    document.querySelector('body').style.backgroundColor = '#333';
});

// Highscores


