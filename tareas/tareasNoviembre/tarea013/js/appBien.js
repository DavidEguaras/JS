'use strict';



//Variables y Constantes necesarias
const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 
'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let contador = 0;



//Funciones

function iniciar(){
    const botonElemento = document.createElement('button');
    botonElemento.innerText = "Añadir Mes";
    botonElemento.style.cursor = 'pointer';
    window.document.body.appendChild(botonElemento);
    const ulElemento = document.createElement('UL');
    document.body.appendChild(ulElemento);
    botonElemento.addEventListener('click', agregar)
}


function agregar (){
    const liElemento = document.createElement('li');
    liElemento.innerText = arrayMeses[contador++].toString();
    document.getElementsByTagName('ul')[0].appendChild(liElemento);
    console.log(contador);
}



//ejecucion
iniciar();