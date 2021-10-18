//Dichiariamo chi ha vinto.

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(userNumber);

const choose = prompt("scegli pari o dispari").toLowerCase();
console.log(choose);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

let computerNumber

function computerNumberGenerator (min, max) {
    return Math.floor(Math.random() * max) + min;
}

computerNumber = (computerNumberGenerator(1, 5));
console.log(computerNumber);

//Sommiamo i due numeri

let numbersSum = computerNumber + userNumber;
console.log(numbersSum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let sumEven = "pari";
let sumOdd = "dispari";

function oddEven(numbersSum) {
    if ( numbersSum % 2 === 0) {
        return sumEven;
    } else {
        return sumOdd;
    }
}

let result = oddEven(numbersSum);
console.log(result);

if (choose === result) {
    alert("you win");
} else {
    alert("you lose");
}