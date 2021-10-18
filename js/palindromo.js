let word = prompt("inserisci una parola");


function verifyWord(word) {

    let splitWord = word.split("");

    let reverseArray = splitWord.reverse();

    let reverseWord = reverseArray.join("");


    return word === reverseWord;
}

console.log(verifyWord(word));