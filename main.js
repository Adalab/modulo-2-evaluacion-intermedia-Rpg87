'use strict';

// const

const selectRace = document.querySelector('.js-select');
const jsButton = document.querySelector('.js-btn');
const battleText = document.querySelector('.js-battleBegin');

// const para razas malvadas

const sureñosMalos = 2;
const orcos = 2;
const goblins = 2;
const huargos = 3;
const trolls = 5;

// const para razas buenas
const pelosos = 1;
const sureñosBuenos = 2;
const enanos = 3;
const numeroreanos = 4;
const elfos = 5;


// function para traer el valor del select
function userFighter () {
    const selectValue = parseInt(selectRace.value);
    return selectValue;
}

// function handleClick
function handleClick (event) {
    event.preventDefault()
    userFighter ()
    strengthEvil ()
    result () 
}

// function math random
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
 
// function usand el randomnumber y se aplique al igual de fuerza que los malos
function strengthEvil() {
    const rollDice = getRandomNumber(5);
    if (getRandomNumber === 2) {
        sureñosMalos;
    }
    else if (getRandomNumber === 3) {
        huargos;
    }
    else if (getRandomNumber === 5) {
        trolls;
    }
}

function result () {
    if (userFighter < strengthEvil) {
        battleText.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo'
    }
    else if (userFighter > strengthEvil) {
        battleText.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena'
    }
    else if (userFighter === strengthEvil) {
        battleText.innerHTML = 'Empate'
    }
}

//Listener
jsButton.addEventListener('click', handleClick);