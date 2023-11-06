let palabra = "pep";

function esPalindroma(palabra) {
    let booleanEsPalindroma;
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        let letra = palabra.charAt(i);
        palabraInvertida = palabraInvertida.concat(letra);
    }
    if (palabra === palabraInvertida) {
        booleanEsPalindroma = true;
    } else {
        booleanEsPalindroma = false;
    }
    return booleanEsPalindroma;
}
console.log(esPalindroma(palabra));


function esPalindromaBien(palabra){
    let palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida;
}

console.log(esPalindromaBien(palabra));