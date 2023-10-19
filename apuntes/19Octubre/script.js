let palabra = "pep";

function esPalindroma(palabra){
    let booleanEsPalindroma;
    let palabraInvertida = "";
    for(let i = palabra.length; i >= 0; i++){
        let letra = palabra.charAt(i);
        palabraInvertida.concat(letra);
    }
    
    if(palabra.localeCompare(palabraInvertida) == 0){
        booleanEsPalindroma = true;
    }else{
        booleanEsPalindroma = false;
    }
    return booleanEsPalindroma
}

console.log(esPalindroma(palabra));