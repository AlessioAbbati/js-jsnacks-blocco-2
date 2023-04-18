let numeriDispari = []; // Creiamo un array vuoto

for (let i = 0; i < 6; i++) {
    let numeroUtente = parseInt(prompt("Inserisci un numero:"));

    if (numeroUtente % 2 !== 0) {
        // Verifichiamo se il numero inserito è dispari
        numeriDispari.push(numeroUtente); // Se lo è, lo aggiungiamo all'array
      }
}  