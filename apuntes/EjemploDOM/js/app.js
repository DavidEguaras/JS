// Obtén por consola, al menos de 2 formas diferentes lo que se pide:
// 1. El elemento con id ‘input2’
// 2. La colección de párrafos
// 3. Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
// 4. El formulario (ojo, no la colección con el formulario sino sólo el formulario)
// 5. Todos los inputs
// 6. Sólo los inputs con nombre ‘sexo’
// 7. Los items de lista de la clase ‘important’ (sólo los LI)

// 1. El elemento con id ‘input2’
let elemento1 = document.querySelector('#input2');
let elemento2 = document.getElementById('input2');
console.log(elemento1);
console.log(elemento2);

// 2. La colección de párrafos
let parrafos1 = document.getElementsByTagName("p");
console.log(parrafos1);

let parrafos2 = document.querySelectorAll('p');
console.log(parrafos2);

// 3. Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
let parrafosLipsum = document.querySelectorAll("div#lipsum p");
console.log(parrafosLipsum);

// 4. El formulario (ojo, no la colección con el formulario sino sólo el formulario)
let formulario1 = document.querySelector('form');
console.log(formulario1);

let formulario2 = document.getElementsByTagName('form')[0];
console.log(formulario2);

// 5. Todos los inputs
let inputs1 = document.querySelectorAll('input');
console.log(inputs1);

let inputs2 = Array.from(document.getElementsByTagName('input'));
console.log(inputs2);

// 6. Sólo los inputs con nombre ‘sexo’
let inputsSexo1 = document.querySelectorAll('input[name="sexo"]');
console.log(inputsSexo1);

let inputsSexo2 = document.getElementsByName('sexo');
console.log(inputsSexo2);

// 7. Los items de lista de la clase ‘important’ (sólo los LI)
let listaItems1 = document.querySelectorAll('li.important');
console.log(listaItems1);

let listaItems2 = document.getElementsByClassName('important');
console.log(listaItems2);