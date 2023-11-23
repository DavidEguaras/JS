export function formatoCuatroDigitos (numero){
    return numero.toString().padStart(4, '0');
}

export function primeraPalabra(str){
    str = str.trim().split(' ');
    const primeraPalabra = str[0];
    return primeraPalabra;
}
