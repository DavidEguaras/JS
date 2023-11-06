function adivinarNumero() {
    let max = 10;
    let min = 1;
    const numeroSecreto = Math.floor(Math.random() * max) + min; // Generar un número aleatorio entre 1 y 10
    let intentos = 0;
  
    alert("Este es el juego de adivinar un número entre 1 y 10");
  
    while (true) {
      const entradaUsuario = prompt("Introduce un número (o pulsa Cancelar para salir):");
  
      if (entradaUsuario === null) {
        alert("Has cancelado el juego.");
        break;
      }
  
      const numeroUsuario = parseInt(entradaUsuario);
  
      if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
        alert("Por favor, introduce un número válido entre 1 y 10.");
      } else {
        intentos++;
  
        if (numeroUsuario === numeroSecreto) {
          alert(`¡Felicidades! ¡Has adivinado el número en ${intentos} intentos! El número era ${numeroSecreto}.`);
          break;
        } else if (numeroUsuario < numeroSecreto) {
          alert("El número secreto es mayor.");
        } else {
          alert("El número secreto es menor.");
        }
      }
    }
  }
  
  adivinarNumero();
  