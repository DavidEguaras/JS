function calcular() {
  let nLados = parseInt(document.getElementById('nLados').value);
  let longitudLado = parseInt(document.getElementById('longitudLado').value);
  let radio = parseInt(document.getElementById('radio').value);

  let areaCirculo = calcularAreaCirculo(radio);
  let perimetroCircunferencia = calcularPerimetroCircunferencia(radio);
  let perimetroPoligono = calcularPerimetroPoligonoRegular(nLados, longitudLado);
  let areaPoligono = calcularAreaPoligonoRegular(nLados, longitudLado);

  document.getElementById('areaCirculo').innerText = "Área del círculo: " + areaCirculo;
  document.getElementById('perimetroCircunferencia').innerText = "Perímetro de la circunferencia: " + perimetroCircunferencia;
  document.getElementById('perimetroPoligono').innerText = "Perímetro del polígono regular: " + perimetroPoligono;
  document.getElementById('areaPoligono').innerText = "Área del polígono regular: " + areaPoligono;
}

function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

function calcularPerimetroCircunferencia(radio) {
  return 2 * Math.PI * radio;
}

function calcularPerimetroPoligonoRegular(nLados, longitudLado) {
  return nLados * longitudLado;
}

function calcularAreaPoligonoRegular(nLados, longitudLado) {
  return (nLados * Math.pow(longitudLado, 2)) / (4 * Math.tan(Math.PI / nLados));
}