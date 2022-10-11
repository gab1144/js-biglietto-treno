const prezzoKm = 0.21;
const kmPercorso = parseInt (prompt("Quanti chilometri devi percorrere?"));
const etaUtente = parseInt (prompt("Quanti anni hai?"));
const prezzoIniziale = kmPercorso * 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
let sconto;
let prezzoFinale;
let datiValidi = true;

if ((kmPercorso < 1 || isNaN(kmPercorso)) && (etaUtente < 0 || isNaN(etaUtente))) {
  alert("Devi inserire un numero di chilometri maggiore di 0 e un'età valida (maggiore o uguale a 0)");
  datiValidi = false;
} else if(etaUtente < 0 || isNaN(etaUtente)) {
  alert("Devi inserire un'età valida (maggiore o uguale a 0)");
  datiValidi = false;
} else if (kmPercorso < 1 || isNaN(kmPercorso)) {
  alert("Devi inserire un numero di chilometri maggiore di 0");
  datiValidi = false;
}

if (datiValidi) {
  document.getElementById('km').innerHTML= kmPercorso + " km";
  document.getElementById('eta').innerHTML= etaUtente;
  document.getElementById('prezzo-i').innerHTML= prezzoIniziale.toFixed(2)  + " €";
  document.getElementById('sconto-min').innerHTML= scontoMinorenni + "%";
  document.getElementById('sconto-over').innerHTML= scontoOver65 + "%";
  
  if (etaUtente < 18) {
    prezzoFinale = prezzoIniziale - (prezzoIniziale * scontoMinorenni / 100);
    sconto = scontoMinorenni;
  } else if (etaUtente > 65) {
    prezzoFinale =prezzoIniziale - (prezzoIniziale *scontoOver65 / 100);
    sconto = scontoOver65;
    } else {
      prezzoFinale = prezzoIniziale;
      sconto = 0;
  }

  document.getElementById('sconto').innerHTML= sconto + " %";
  document.getElementById('prezzo-f').innerHTML= prezzoFinale.toFixed(2) + " €";  
}