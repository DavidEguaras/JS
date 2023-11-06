import { Persona } from "./clases/clasePersona.js";
import { Empleado } from "./clases/claseEmpleado.js";
import { Cliente } from "./clases/claseCliente.js";
let persona1 = new Persona('Juan', 'Perez', 19);
let empleado1 = new Empleado("Federica", "Lopez", 24, 2250)
let cliente1 = new Cliente("David", "Benéitez", 18, 1500)

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString())
