import { Persona } from "./clasePersona.js";

export class Empleado extends Persona {
  static contadorEmpleado = 200;

  constructor(nombre, apellidos, edad, sueldo) {
    super(nombre, apellidos, edad);
    this._sueldo = sueldo;
    this.id = ++Empleado.contadorEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }
  
  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  toString() {
    return `${super.toString()} cobra: ${this.sueldo} euros`;
  }
}