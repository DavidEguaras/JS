// Importar las clases necesarias
import { Computadora } from "../tarea020 copy/clases/Computadora";

// Crear instancias de las clases necesarias
const miMonitor = new Monitor('MarcaX', '22 pulgadas');
const miTeclado = new Teclado('USB', 'Logitech');
const miRaton = new Raton('Inalámbrico', 'MarcaY');

// Crear una instancia de Computadora usando las instancias previamente creadas
const miComputadora = new Computadora('Mi Computadora', miMonitor, miTeclado, miRaton);

// Imprimir la representación de la computadora
console.log(miComputadora.toString());