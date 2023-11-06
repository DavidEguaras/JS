// Forma 1
const input2 = document.getElementById('input2');
console.log(input2);
// Forma 2 (utilizando selección por query)
const input2Query = document.querySelector('#input2');
console.log(input2Query);


// Forma 1
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
// Forma 2 (utilizando selección por query)
const paragraphsQuery = document.querySelectorAll('p');
console.log(paragraphsQuery);


// Forma 1
const paragraphsInDiv = document.querySelector('#lipsum').getElementsByTagName('p');
console.log(paragraphsInDiv);
// Forma 2 (utilizando selección por query)
const paragraphsInDivQuery = document.querySelectorAll('#lipsum p');
console.log(paragraphsInDivQuery);


// Forma 1
const form = document.querySelector('form');
console.log(form);
// Forma 2 (utilizando selección por nombre de etiqueta)
const formByName = document.forms[0];
console.log(formByName);


// Forma 1
const inputs = document.getElementsByTagName('input');
console.log(inputs);
// Forma 2 (utilizando selección por query)
const inputsQuery = document.querySelectorAll('input');
console.log(inputsQuery);

// Forma 1
const inputsWithSexoName = document.querySelectorAll('input[name="sexo"]');
console.log(inputsWithSexoName);
// Forma 2 (filtrando la colección de todos los inputs)
const allInputs = document.querySelectorAll('input');
const filteredInputs = Array.from(allInputs).filter(input => input.name === 'sexo');
console.log(filteredInputs);


// Forma 1
const importantListItems = document.querySelectorAll('li.important');
console.log(importantListItems);
// Forma 2 (utilizando selección por query)
const importantListItemsQuery = document.querySelectorAll('li.important');
console.log(importantListItemsQuery);