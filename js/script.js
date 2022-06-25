// raccolgo tutti i riferimenti al DOM
// lego la logica all'eventlistener sul bottone di conferma

// FORM ELEMENTS

const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');
const buyButton = document.getElementById('buy-button');

//TICKET ELEMENTS

const ticketSection = document.getElementById('ticket-section')
const passengerElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const carElement = document.getElementById('car');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');



//logica confirm button
//1 Recupero i valori dal form
//2 calcolo il prezzo del biglietto in base ai km
//3 verifico l'eventuale sconto
//4 calcolo il totale definitivo
//5 arrotondo a due decimali
//6 ?svuoto tutti i campi?
//7 preparo i valori corretti nel biglietto
//8 faccio apparire la sezione del ticket

confirmButton.addEventListener('click', function () {

    //1 Recupero i valori dal form
    const nameValue = nameField.value;
    const kmsValue = kmsField.value;
    const ageValue = ageField.value;

    console.log(nameValue, kmsValue, ageValue);

    //! VALIDATION
    if (!nameValue.trim() || isNaN(kmsValue) || kmsValue <= 0) {
        //SE nameValue non c'è O kmsValue non è un numero O kmsValue è uguale o minore di 0
        alert('Hai inserito valori non validi');
        return; //!blocca la funzione
    }

    //2 calcolo il prezzo del biglietto in base ai km
    let rateName = 'Tariffa Ordinaria'
    let price = 0.21 * kmsValue;


    //3 verifico l'eventuale sconto

    if (ageValue === 'min') {
        //4 calcolo il totale definitivo
        price *= 0.8;
        rateName = 'Tariffa Minorenni';
    } else if (ageValue === 'over') {
        //4 calcolo il totale definitivo
        price *= 0.6;
        rateName = 'Tariffa Over 65';
    }


    console.log(price, rateName);

    //randomizzo il numero della carrozza da 1 a 12
    const car = Math.floor(Math.random() * 12 + 1 - 1) + 1

    //randomizzo il PNR a 5 cifre
    const pnr = Math.floor(Math.random() * (100000 - 10000)) + 10000;


    //7 preparo i valori corretti nel biglietto

    passengerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    carElement.innerText = car;
    pnrElement.innerText = pnr;
    priceElement.innerText = '€ ' + price.toFixed(2); //5 arrotondo a due decimali

    //8 faccio apparire la sezione del ticket

    ticketSection.classList.remove('d-none');

    buyButton.addEventListener('click', function () {
        alert('Il biglietto è stato acquistato!');
        //6 svuoto tutti i campi
        window.location.reload();
    })

    //6 svuoto tutti i campi con il bottone Annulla
    cancelButton.addEventListener('click', function () {
        nameField.value = '';
        kmsField.value = '';
        ageField.value = '';

        ticketSection.classList.add('d-none');
    })
})