//parte1
let a = {id:2, name: 'object 2', address: {street: 'C/Ajo', num: 3} };
let cadena = JSON.stringify(a);
console.log(cadena);

let otraCadena = "{id:2, name: 'object 2', address: {street: 'C/Ajo', num: 3} }";
console.log(otraCadena);

let otroObjeto = JSON.parse(otraCadena);
console.log(otroObjeto);

//parte2
function notaMedia(...notas){
    let total = notas.reduce((total, nota));
}
console.log(notaMedia(3.6, 6.8));
let array = [1, 2, 3];
console.log(array);
console.log(...array);