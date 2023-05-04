// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti


let items = [];
let contatore;


for(i = 1; i <= 5; i++){
    let userNumber = parseInt(prompt("inserisci un numero"));
    contatore = items.push(userNumber);

}

const sum = items.reduce((partialSum, a) => partialSum + a);
console.log(sum);

// let somma = 0;


// for(i = 1; i <= 5; i++){
//     const userNumber = parseInt(prompt("inserisci un numero"));
//     console.log(userNumber);
//     somma = somma + userNumber;
// }

// console.log(somma);