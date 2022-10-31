'use strict';

// const

const selectRace = document.querySelector('.js-select');
const jsButton = document.querySelector('.js-btn');
const battleText = document.querySelector('.js-battleBegin');


// function handleClick
function handleClick (event) {
    event.preventDefault()
}

// function math random
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
   




// Razas malvadas
/*Raza 1: Sureños malos con fuerza (2),
Raza 2: Orcos con fuerza (2),
Raza 3: Goblins con fuerza (2),
Raza 4: Huargos con fuerza (3),
Raza 5: Trolls con fuerza(5).
*/



//Listener
jsButton.addEventListener('click', handleClick);