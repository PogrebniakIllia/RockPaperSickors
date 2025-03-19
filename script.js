let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');
let playAgain = document.querySelector('.again');
let start = document.querySelector('.start');
let mid = document.querySelector('.mid');
let end = document.querySelector('.end');
let paperAttack = document.querySelector('.paper-attack');
let paperResult = document.querySelector('.paper-result');
let aiResult = document.querySelector('.ai-result');
let resultPlayer = document.querySelector('.result-player');
let resultAi = document.querySelector('.result-ai');
let resultDraw = document.querySelector('.result-draw');
let point = document.querySelector('.point');
let playerTemp;
let total = 0;
point.innerHTML = total;

let game = ["paper","rock","scissors"];
let indexRandom = Math.round(Math.random()*2);
let ai = game[indexRandom];
console.log(ai);

paper.addEventListener('click', function () {
    start.style.display = 'none';
    point.innerHTML = total;
    mid.style.display = 'block';
    point.innerHTML = total;
    if (ai == "paper") {
        aiResult.style.backgroundImage = 'url(./img/Paper_up.png)';
        resultDraw.style.display = 'flex';
        console.log("Draw!");
    }
    if (ai == "rock") {
        aiResult.style.backgroundImage = 'url(./img/Rock.png)';
        resultPlayer.style.display = 'flex';
        total += 1;
        console.log("Player Win!");
    }
    if (ai == "scissors") {
        aiResult.style.backgroundImage = 'url(./img/Scissors_up.png)';
        resultAi.style.display = 'flex';
        console.log("Ai Win!");
    }


    setTimeout(function () {
        end.style.display = 'block'
        mid.style.display = 'none'
        point.innerHTML = total;
        }, 2000)
})

rock.addEventListener('click', function () {
    start.style.display = 'none';
    paperAttack.style.backgroundImage = 'url(./img/Rock_right.png)';
    mid.style.display = 'block';
    point.innerHTML = total;
    paperResult.style.backgroundImage = 'url(./img/Rock.png)';
    if (ai == "rock") {
        aiResult.style.backgroundImage = 'url(./img/Rock.png)';
        resultDraw.style.display = 'flex';
        console.log("Draw!");
    }
    if (ai == "scissors") {
        aiResult.style.backgroundImage = 'url(./img/Scissors_up.png)';
        resultPlayer.style.display = 'flex';
        total += 1;
        console.log("Player Win!");
    }
    if (ai == "paper") {
        aiResult.style.backgroundImage = 'url(./img/Paper_up.png)';
        resultAi.style.display = 'flex';
        console.log("Ai Win!");
    }

    setTimeout(function () {
        end.style.display = 'block'
        mid.style.display = 'none'
        point.innerHTML = total;
        }, 2000)
})

scissors.addEventListener('click', function () {
    start.style.display = 'none';
    paperAttack.style.backgroundImage = 'url(./img/Scissors_right.png)';
    mid.style.display = 'block';
    point.innerHTML = total;
    paperResult.style.backgroundImage = 'url(./img/Scissors_up.png)';
    if (ai == "scissors") {
        aiResult.style.backgroundImage = 'url(./img/Scissors_up.png)';
        resultDraw.style.display = 'flex';
        console.log("Draw!");
    }
    if (ai == "paper") {
        aiResult.style.backgroundImage = 'url(./img/Paper_up.png)';
        resultPlayer.style.display = 'flex';
        total += 1;
        console.log("Player Win!");
    }
    if (ai == "rock") {
        aiResult.style.backgroundImage = 'url(./img/Rock.png)';
        resultAi.style.display = 'flex';
        console.log("Ai Win!");
    }

    setTimeout(function () {
        end.style.display = 'block'
        mid.style.display = 'none'
        point.innerHTML = total;
        }, 2000)
})

playAgain.addEventListener('click', function () {
    start.style.display = 'block';
    end.style.display = 'none';
    resultAi.style.display = 'none';
    resultPlayer.style.display = 'none';
    resultDraw.style.display = 'none';
    game = ["paper","rock","scissors"];
    indexRandom = Math.round(Math.random()*2);
    ai = game[indexRandom];
    console.log(ai);
})