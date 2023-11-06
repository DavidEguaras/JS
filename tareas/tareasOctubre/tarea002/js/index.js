function calcularMedia() {
  window.alert("Este programa se encarga de calcular tu nota media de un conjunto de notas");

  let notas = [];
  let suma = 0;

  while (true) {
    const notaIntroducida = window.prompt("Introduce una nota o cancela para indicar que has terminado de establecer tus notas");

    if (notaIntroducida === null) { // Verificar si el usuario hizo clic en Cancelar
      if (notas.length === 0) {
        window.alert("No ingresaste ninguna nota. El programa se ha cancelado.");
        break;
      }else {
        const media = suma / notas.length;
        window.alert(`La nota media de las notas introducidas es ${media}`);
      }
      break;
    }

    const nota = parseFloat(notaIntroducida);

    if (!(isNaN(nota) || nota < 1 || nota > 10)) { // La nota es válida
      notas.push(nota);
      suma += nota;
    } else {
      alert("Por favor, introduce una nota válida, la nota debe ser un número, menor o igual que 10 y mayor que 1");
    }
  }
}

calcularMedia();
