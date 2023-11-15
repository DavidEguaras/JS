console.log("ejercicioCalculadora")
const botonSuma = document.getElementById("boton_suma");

botonSuma.addEventListener('click', () => {
    const operandoA = parseFloat(document.getElementById("operandoA").value);
    const operandoB = parseFloat(document.getElementById("operandoB").value);
    sumar(operandoA, operandoB);
});

function sumar(numero1, numero2) {
    let resultado = 0;
    let resultadoTexto = document.createElement("INPUT");
    const resultadoContainer = document.getElementById("resultado");
    resultadoTexto.setAttribute("type", "text");
    if(isNaN(numero1) || isNaN (numero2)){
        resultadoTexto.value = "Operando No Valido";
    }else{
        resultado = numero1 + numero2;
        resultadoTexto.value = resultado;
    }
    resultadoContainer.appendChild(resultadoTexto);
}
