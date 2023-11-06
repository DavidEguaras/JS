

function factorial() {
  // Obtener el valor del número ingresado
  const numero = parseInt(prompt("Introduce un número entero positivo:"));

  // Verificar si el número es un entero positivo
  if (numero >= 0) {
      // Inicializar el resultado del factorial a 1
      let factorial = 1;
      let ecuacion = `${numero}! = `;

      // Calcular el factorial y componer
      for (let i = numero; i > 0; i--) {
          factorial *= i;   //multiplicamos el ultimo numero obtenido
          ecuacion += i;    //concadenamos a la ecuacion el ultimo numero obtenido

          //si no es el último número agregamos un simbolo de multiplicacion en la ecuacion
          if (i > 1) {
              ecuacion += ' x ';
          }
      }
      alert(`Resultado: ${factorial}`);
      alert(`Ecuación: ${ecuacion}`);
  } else {
      alert('Por favor, ingresa un número entero positivo.');
  }
}
factorial();
