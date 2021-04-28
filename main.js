// chiedo all’utente il cognome e mi accerto il campo non sia vuoto o numerico
for (var i = 0; i = Infinity; i++) {
  var cognomeUtente = prompt("Inserisci il tuo cognome");
  cognomeUtente = cognomeUtente.toLowerCase().replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase(); });
if (isNaN(cognomeUtente)) { 
    break; 
  }else{
    alert("Si prega di inserire correttamente il propio cognome")
  }
}

// creo array 
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognomeUtente);
listaCognomi.sort();

var i = 0;

while (i < listaCognomi.length){
  var elemento = listaCognomi[i];
  var contenuto = document.getElementById("lista_cognomi").innerHTML;
  document.getElementById("lista_cognomi").innerHTML = contenuto + "<li>" + elemento + "</li>";
  
    i++;
}

var numeroLista = listaCognomi.indexOf(cognomeUtente);

document.getElementById("numero_coda").innerHTML = "Sei al " + (numeroLista + 1) + "° posto della lista";


if (numeroLista == 0){
  document.write("Tocca a te!");

}else {
  document.write("Altre " + numeroLista + " persone e tocca a te!");
}



