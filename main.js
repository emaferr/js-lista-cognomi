// chiedo all’utente il cognome
// chiedo all’utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomeUtente = cognomeUtente.toUpperCase();
console.log(cognomeUtente);

// creo array 
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognomeUtente);
listaCognomi.sort();


var i = 0;

while (i < listaCognomi.length){
  var elemento = listaCognomi[i].toUpperCase();
  var contenuto = document.getElementById("lista_cognomi").innerHTML;
  document.getElementById("lista_cognomi").innerHTML = contenuto + "<li>" + elemento + "</li>";
 
    i++;
}

var numeroLista = listaCognomi.indexOf(cognomeUtente);

document.getElementById("numero_coda").innerHTML = "Sei al numero " + (numeroLista + 1) + " della lista";



