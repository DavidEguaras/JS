// let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// let diasSemanaMayusculas = diasSemana.map(dia => dia.toUpperCase());
// console.log(diasSemanaMayusculas);

// let notas = ['4', 5, '7', 0];
// let notasNumericas = notas.map(Number);

// console.log(notasNumericas);

let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
let notaMaxima = arrayNotas.reduce((max, valor) => valor > valor > max ? valor : max, 11);

let integrado = [[0,1], [2, 3], [4, 5]].reduce(function(a, b){
    return a.concat(b);
}, "pp");

const partesDelCoche = ["asientos", "volante", "puertas", "ruedas", "pintura metalizada"];

const coche = partesDelCoche.reduce(function(a, b){
    return a+ " "+b;

}, "mi coche tiene: ");
console.log(coche);
// let arrayNuevo = Array.from(arrayNotas, (nota, indice)=> console.log(nota+indice));
// console.log(ArrayNuevo);
let arrayNuevo = Array.from(arrayNotas);
console.log(arrayNuevo);

let pCollection = document.getElementsByTagName('p');
console.log(pCollection);
let pArray = Array.from(pCollection);
console.log(pArray);
