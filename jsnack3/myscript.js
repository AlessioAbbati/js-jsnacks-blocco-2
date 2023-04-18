// creo un array con dei numeri interi

const numeri = [1,2,3,4,5,6,7];

// creo la variabile somma con valore 0

let somma = 0

// creo il ciclo per leggere i numeri

for (let i = 0; i < numeri.length; i++) {
    // controllo se i è dispari
    if (i % 2 !== 0){
        // aggiungo l'elemento al valore somma
        somma += numeri[i];
    }
}