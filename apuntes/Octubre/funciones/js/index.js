//funcion declarada de la forma tradicional
function potencia1 (base, exponente){
    return base ** exponente;
}

console.log(potencia1(4, 2));

//funcion declarada como anonima
let potencia2 = function (base, exponente){
    return base ** exponente;
}


//funcion flecha

let potencia3 = (base, exponente) => base**exponente


let potencia4 = (base, exponente) => {
    let total = 1;
    for (let i = 0; i < exponente; i++){
        total = total * base;
    }
    return total;
}