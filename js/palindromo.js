//creo la funzione di verifica
function verifyWord() {

//divido la parola in singole lettere e creo un array con valori di ogni sigola lettera
let splitWord = word.split("");

//inverto l'ordine dei valori dell'array
let reverseArray = splitWord.reverse();

//trasformo l'array con lettere invertite in una stringa
let reverseWord = reverseArray.join("");

//se la parola invertita è uguale alla parola normale è vero
if (word === reverseWord) {
    let palindrome = true;
    return palindrome;
//se la parola invertita non è uguale alla parola normale è falso
} else {
    let notPalindrome = false;
    return notPalindrome;
}

}
//chiedo all'utente di inserire una parola
let word = prompt("inserisci una parola").toLowerCase;

//dichiaro la funzione con la parola inserita dal prompt
console.log(verifyWord(prompt));