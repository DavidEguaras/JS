
//funcion para convertir un 1 a 001, 2 a 002...
export function formatoTresDigitos (numero){
    return numero.toString().padStart(3, '0');
}