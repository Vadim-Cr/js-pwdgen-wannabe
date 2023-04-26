// Dichiaro le mie variabili
let userName, userSurname, userFavColor, userAge, concatena, messaggio

// chiedo all'utente il suo nome
userName = prompt("Quando sei stato battezzato che nome ti hanno affibbiato?")
// chiedo all'utente il suo cognome
userSurname = prompt("All'anagrafe con quale disgraziato nome di famiglia sei stato maledetto?")
// chiedo all'utente il suo colore preferito
userFavColor = prompt("Tanto non ce ne importa del colore che scrivi qui, sicuramnete sarà qulacosa di banale")
// chiedo all'utente la sua età
userAge = prompt("Sottrai gli anni che ti rimangono all'età della tua morte e inserisci qui il risultato!")
// concatena i risultati
concatena = userName.concat(userSurname, userFavColor, userAge, "!")
// scrivi il messaggio
messaggio = `La tua password super sicura e poco banale è: ${concatena}`

// concateno le risposte e scrivo la risposta + "21"

document.getElementById("mio_var").innerHTML = messaggio
