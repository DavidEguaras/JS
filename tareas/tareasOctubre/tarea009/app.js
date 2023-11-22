
function convertirNumerico(array) {
    array.forEach(element, index => {
        if(!isNaN(element)){
            array[index] = parseInt(element);
        }
    });
    return array;
}

// Ejemplo de uso
let miArray = ["1", "2", "3", "cuatro", "5"];
console.log("Array original:", miArray);

miArray = convertirNumerico(miArray);
console.log("Array convertido:", miArray);