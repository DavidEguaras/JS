import { Bola } from "./clases/clase_bola.js";
let intervalo;

function formatearA3cifras(num){
    return num.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad);
}



const formatoMoneda = new Intl.NumberFormat('es-ES', {     style: 'currency',     currency: 'EUR', 
// Puedes cambiar la moneda según tus necesidades    minimumFractionDigits: 2,     maximumFractionDigits: 2,
     useGrouping: true,   });
//return formatoMoneda.format(valor);

function crearBotonCentrado(){
    const boton =document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', 'position: absolute');
    boton.value="Booola";
    boton.style.top=`${window.innerHeight -50}px`;
    boton.style.left=`${window.innerWidth/2}px`;
    boton.style.zIndex=1;
    document.body.appendChild(boton);
    return boton; //por si acaso
}

function generarRandomInt(max){
    return Math.floor(Math.random() * max);
}

function pasarAHexadecimal(num){
    let resultado=num.toString(16);
    //debido a que da problemas con los colores si cada 
    // color no tiene 2 dígitos hexadecimales, hay que añadir 0 por la izda
    if (resultado.length ===1) resultado="0"+resultado;
    return resultado;
}

function pararMovimiento(){
    clearInterval
}

function iniciarMovimiento(){

}

function eliminarMovimiento(){
    if (Bola.arrayBolas.length > 0){
        const ultimaBola = Bola.arrayBolas.pop();
        ultimaBola.eliminar();
    } 
}


function escucharTeclas(evento){
    console.log('tecla' + evento.key);
    switch(evento.key){
        case 'Home' : //tecla inicio
            iniciarMovimiento();
            break;
        case 'End':
            pararMovimiento();
            break;
        case 'Delete':
            eliminarMovimiento();
            break;
    }
}


export const misFunciones ={
    formatearA3cifras,
    crearBotonCentrado,
    pasarAHexadecimal,
    generarRandomInt,
    escucharTeclas
}








