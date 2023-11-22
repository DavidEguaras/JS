import { Teclado } from "./clases/claseTeclado.js";
import { Raton } from "./clases/claseRaton.js";
import { Orden } from "./clases/claseOrden.js";
import { Computadora } from "./clases/claseComputadora.js";
import {Monitor} from "./clases/claseMonitor.js";



const miMonitor = new Monitor('MarcaX', '22');
const miTeclado = new Teclado('USB', 'Marca Y');
const miRaton = new Raton('Inalámbrico', 'MarcaZ');
const miComputadora1 = new Computadora('Mi Computadora1', miMonitor, miTeclado, miRaton);
const miComputadora2 = new Computadora('Mi Computadora2', miMonitor, miTeclado, miRaton);

const orden = new Orden(miComputadora1, miComputadora2);

const orden1 = new Orden(miComputadora1);

orden.mostrarOrden();
orden1.mostrarOrden();