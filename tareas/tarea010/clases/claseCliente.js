import { Persona } from "./clasePersona.js";

export class Cliente extends Persona {
  static contadorCliente = 300;

  constructor(nombre, apellidos, edad) {
    super(nombre, apellidos, edad);
    this._fechaRegistro = new Date().toLocaleDateString();
    this.id = ++Cliente.contadorCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fecha) {
    this._fechaRegistro = fecha.toLocaleDateString();
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  toString() {
    return `${super.toString()} con fecha de registro: ${this.fechaRegistro}`;
  }
}