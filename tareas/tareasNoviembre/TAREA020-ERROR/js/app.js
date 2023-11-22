import { Raton } from "./clases/claseRaton";
import { Teclado } from "./clases/claseTeclado";


// Supongamos que tienes las funciones y valores necesarios
const tipoEntradaRaton = "USB";
const marcaRaton = "Logitech";
const tipoEntradaTeclado = "Bluetooth";
const marcaTeclado = "Microsoft";

// Crear instancias de las clases
const raton = new Raton(tipoEntradaRaton, marcaRaton);
const teclado = new Teclado(tipoEntradaTeclado, marcaTeclado);

// Mostrar los detalles de las instancias
console.log(raton.toString());
console.log(teclado.toString());