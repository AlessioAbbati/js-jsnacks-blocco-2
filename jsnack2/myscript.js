// creo due array, uno per i nomi e uno per i cognomi

let nomi = [
    "Jay",
    "Daisy",
    "Jordan",
    "Nick",
    "Myrtle",
    "Meyer",
    "Dan",
]

let cognomi = [
    "Gatsby",
    "Buchanan",
    "Baker",
    "Carraway",
    "Wilson",
    "Wolfsheim",
    "Cody",
]

// creo l'array vuoto per la lista casuale

let listaNomi = []

// aggiungo il ciclo per generare i nomi casualmente

for (let i = 0; i < 7; i++) {
    let nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
    let cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
    listaNomi.push(nomeCasuale + " " + cognomeCasuale);
}

console.log(listaNomi);
