
// function retirar(saldo, cantidad){
//     if(saldo < cantidad){
//         throw "Saldo insuficiente";
//     }
//     return saldo - cantidad;
// }

// let saldo = 300;
// let cantidad = 200; 
// let resultado = retirar(saldo, cantidad)

// console.log(resultado)

'use strict';
function calcularMedia(notas){
    let total = 0;
    if (notas.length <= 1){
        throw "no se puede calcular la media";
    }else{
        for(let i = 0; i < notas.length; i++){

            //Si no es un numero lanzamos excepcion
            if(isNaN(notas[i])){
                throw "una de las notas no es un numero";    
            
            //Si es un numero lo agregamos al total
            }else{
                total += notas[i];
            }

        }
        const media = total/notas.length;
        return media;
    }
}


try {
console.log("media : ",calcularMedia([j,8,9,2]));
} catch (error) {
    console.log(error);
}


console.log("hola");
