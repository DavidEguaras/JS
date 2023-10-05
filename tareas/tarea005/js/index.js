/*EJERCICIO: Haz una función a la que se le pasa un DNI (ej. 12345678w o 87654321T) y devolverá si es correcto o no.
 La letra que debe corresponder a un DNI correcto se obtiene dividiendo la parte numérica entre 23 y
  cogiendo de la cadena ‘TRWAGMYFPDXBNJZSQVHLCKE’ la letra correspondiente al resto de la divisón. 
  Por ejemplo, si el resto es 0 la letra será la T y si es 4 será la G. 
Prueba la función en la consola con tu DNI*/

function validarDNI(dni) {

    // Elimina espacios y convierte a mayúsculas
    dni = dni.replace(/\s/g, '').toUpperCase();
    
    // Verifica que el DNI tiene 9 caracteres (8 números + 1 letra)
    if (dni.length !== 9) {
        alert('Formato de DNI incorrecto');
        return;
    }

    // Obtiene la parte numérica del DNI
    const numeros = dni.slice(0, 8);

    // Obtiene la letra del DNI
    const letra = dni.charAt(8);

    // Calcula la letra correcta
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const resto = parseInt(numeros) % 23;
    const letraCorrecta = letras.charAt(resto);

    // Verifica si la letra ingresada es correcta
    if (letra === letraCorrecta) {
        alert('DNI válido');
    } else {
        alert('DNI incorrecto');
    }
}

let dni = window.prompt("Introduce tu DNI, comprobaremos si es valido o no");
validarDNI(dni);