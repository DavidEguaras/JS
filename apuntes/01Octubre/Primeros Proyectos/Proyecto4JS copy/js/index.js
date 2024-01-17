
// Calcular el área de un círculo dado el radio

function calcularAreaCirculo(radio) {

    return Math.PI * radio * radio;
    
    }
    
    // Calcular el perímetro de una circunferencia dado el radio
    
    function calcularPerimetroCircunferencia(radio) {
    
    return 2 * Math.PI * radio;
    
    }
    
    // Calcular el perímetro de un polígono regular dado el número de lados y la longitud de un lado
    
    function calcularPerimetroPoligonoRegular(nLados, longitudLado) {
    
    return nLados * longitudLado;
    
    }
    
    // Calcular el área de un polígono regular dado el número de lados y la longitud de un lado
    
    function calcularAreaPoligonoRegular(nLados, longitudLado) {
    
    return (nLados * Math.pow(longitudLado, 2)) / (4 * Math.tan(Math.PI / nLados));
    
    }
    
    //Mostramos la informacion
    
    let radio = 5;
    
    window.alert("Área del círculo: " + calcularAreaCirculo(radio));
    
    window.alert("Perímetro de la circunferencia: " + calcularPerimetroCircunferencia(radio));
    
    let nLados = 5;
    
    let longitudLado = 4;
    
    window.alert("Perímetro del poligono regular: " + calcularPerimetroPoligonoRegular(nLados, longitudLado));
    
    window.alert("Área del poligono regular: " + calcularAreaPoligonoRegular(nLados, longitudLado));