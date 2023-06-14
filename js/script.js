const clickButton = document.getElementById('click-button');
console.log(clickButton, typeof clickButton);

clickButton.addEventListener('click', 
function() {

const km = parseInt(document.getElementById('km').value);
console.log(km, typeof km);

const age = parseInt(document.getElementById('age').value);
console.log(age, typeof age);

let prezzoBiglietto = km * 0.21;
console.log(prezzoBiglietto, typeof prezzoBiglietto);

if (age < 18) {
      x = prezzoBiglietto * 0.8;
     } else if (age >= 65) {
        x = prezzoBiglietto * 0.6; 
     } else {
        x = prezzoBiglietto;
     }
     console.log(x);
     document.querySelector('#result').innerHTML = "Il prezzo del tuo biglietto è: €" + x.toFixed(2);
}
);


// if (age < 18) {
//   x = prezzoBiglietto * 0.8;
//  } else if (age >= 65) {
//     x = prezzoBiglietto * 0.6; 
//  } else {
//     x = prezzoBiglietto;
//  }
// console.log(x, typeof x);

// const myButton = document.getElementById('click-button');

// myButton.addEventListener('click', 
//     function() {
//         const kmInput = document.querySelector('[name="km"]');
//         console.log(kmInput.value);
//          const ageInput = document.querySelector('[name="age"]');
//          console.log(ageInput.value);
         
//     }
// );
// document.querySelector('h1').innerHTML

// document.querySelector('#my_id').innerHTML = x.toFixed(2)

// if(isNaN(age) || isNaN(km)){
//     alert('Il valore inserito non è valido!')
//  } 
