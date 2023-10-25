import { Persona } from "./clases/clasePersona.js"
import { Empleado } from "./clases/claseEmpleado.js"
let persona1 = new Persona('Juan', 'Perez', 19);
let empleado1 = new Empleado("Federica", "Lopez", 24, 2250)


console.log(persona1.toString());
console.log("Funciona!");
console.log(empleado1.toString());

