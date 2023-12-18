const resultadoP = document.getElementById("resultado");
const numero1 = document.getElementById("numero1").value;
const numero2 = document.getElementById("numero2").value;
const boton = document.getElementById("mostrar");

const multiplicarValores = (a, b) => a*b;
let resultado = multiplicarValores(1, 2);



boton.addEventListener('click', mostrarResultado());

function mostrarResultado(){
    resultadoP.textContent = resultado;
}


