//ejercicio1
// Forma 1
const input2 = document.getElementById('input2');
console.log(input2);
// Forma 2 (utilizando selección por query)
const input2Query = document.querySelector('#input2');
console.log(input2Query);


//ejercicio2
// Forma 1
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
// Forma 2 (utilizando selección por query)
const paragraphsQuery = document.querySelectorAll('p');
console.log(paragraphsQuery);


//ejercicio3
// Forma 1
const paragraphsDiv = document.querySelector('#lipsum').getElementsByTagName('p');
console.log(paragraphsDiv);
// Forma 2 (utilizando selección por query)
const paragraphsDivQuery = document.querySelectorAll('#lipsum p');
console.log(paragraphsDivQuery);


//ejercicio4
// Forma 1
const form = document.querySelector('form');
console.log(form);
// Forma 2 (utilizando selección por nombre de etiqueta)
const formByName = document.forms[0];
console.log(formByName);


//ejercicio5
// Forma 1
const inputs = document.getElementsByTagName('input');
console.log(inputs);
// Forma 2 (utilizando selección por query)
const inputsQuery = document.querySelectorAll('input');
console.log(inputsQuery);

//ejercicio6


//ejercicio7
// Forma 1
const importantListItems = document.querySelectorAll('li.important');
console.log(importantListItems);

// Forma 2 (utilizando selección por query)
const importantListItemsQuery = document.querySelectorAll('li.important');
console.log(importantListItemsQuery);