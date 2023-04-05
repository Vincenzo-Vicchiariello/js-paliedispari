let stringa1 = prompt("Scegli un numero.");
let numero1 = numCheck(stringa1);

//Chiesto numero all'utente, va verificato se è effettivamente un numero.

function numCheck(stringa) {
    while (isNaN(stringa) || stringa == "") {
        stringa = prompt("Non hai inserito un numero. Scegli un numero.");

    }
    let numero = parseInt(stringa);
    return numero;

}

console.log(numero1);
//Generazione numero casuale
let numero2r = Math.random() * 10;
let numero2p = Math.round(numero2r);
let numero2 = parseInt(numero2p);
console.log(numero2);

//Modo MOLTO rudimentale di chiedere all'utente pari o dispari.
let choice = "Pari?";
if (confirm(choice) == true) {
    choice = "pari"
} else {
    choice = "dispari"
}

console.log(choice);

//Somma dei numeri
let sumOfNumbers = numero1 + numero2;
console.log(sumOfNumbers);
let sum2 = parseInt(sumOfNumbers);

//Controllo pari o dispari
let win = "."

if (sum2 % 2 == 0) {
    console.log("Pari!");
    win = "pari";
}
else {
    console.log("Dispari!");
    win = "dispari";
}

console.log(win);

if (win == choice) {
    console.log("Congratulazioni! Hai vinto!");
} else {
    console.log("Ritenta sarai più fortunato!")
}


/*

let stringa1 = prompt("Inserisci il primo numero: ");
let numero1 = validateAndConvertUntilInputNumber(stringa1);


function validateAndConvertUntilInputNumber(stringa) {
    while (isNaN(stringa) || stringa == "") {
        stringa = prompt("Reinserisci un numero: ");
    }

    // Qui sono sicuro che la mia stringa conterrà un numero
    let numero = parseInt(stringa);
    return numero;
}*/


