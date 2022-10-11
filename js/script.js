const kmPercorso = parseInt (prompt("Quanti chilometri devi percorrere?"));
const etaUtente = parseInt (prompt("Quanti anni hai?"));
let prezzoIniziale;
const scontoMinorenni = 20;
const scontoOver65 = 40;
let prezzoFinale;


prezzoIniziale = kmPercorso * 0.21;
document.getElementById('km').innerHTML= kmPercorso;
document.getElementById('eta').innerHTML= etaUtente;
document.getElementById('prezzo-i').innerHTML= prezzoIniziale  + " €";
document.getElementById('sconto-min').innerHTML= scontoMinorenni + "%";
document.getElementById('sconto-over').innerHTML= scontoOver65 + "%";

if (etaUtente < 18) {
  prezzoFinale = prezzoIniziale - (prezzoIniziale * scontoMinorenni / 100);
  document.getElementById('sconto').innerHTML= scontoMinorenni + "%";
}

if (etaUtente > 65) {
  prezzoFinale =prezzoIniziale - (prezzoIniziale *scontoOver65 / 100);
  document.getElementById('sconto').innerHTML= scontoOver65 + " %";
}

document.getElementById('prezzo-f').innerHTML= prezzoFinale.toFixed(2) + " €";

