let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');
let playAgain = document.querySelector('.again');
let start = document.querySelector('.start');
let mid = document.querySelector('.mid');
let end = document.querySelector('.end');
let playerTemp;

let game = ["paper","rock","scissors"];
let indexRandom = Math.round(Math.random()*2);
let ai = game[indexRandom];
console.log(ai);

paper.addEventListener('click', function () {
    start.style.display = 'none';
    mid.style.display = 'block';
    if (ai == "paper") {
        console.log("Draw!");
    }
    if (ai == "rock") {
        console.log("Player Win!");
    }
    if (ai == "scissors") {
        console.log("Ai Win!");
    }


    setTimeout(function () {
        end.style.display = 'block'
        mid.style.display = 'none'
        }, 2000)
})

rock.addEventListener('click', function () {
    start.style.display = 'none';
    mid.style.display = 'block';

    setTimeout(function () {
        end.style.display = 'block'
        mid.style.display = 'none'
        }, 2000)
})

scissors.addEventListener('click', function () {
    start.style.display = 'none';
    mid.style.display = 'block';

    setTimeout(function () {
        end.style.display = 'block'
        mid.style.display = 'none'
        }, 2000)
})

playAgain.addEventListener('click', function () {
    start.style.display = 'block';
    end.style.display = 'none';
})