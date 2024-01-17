import { Persona } from "./clasePersona.js";

export class Empleado extends Persona{
    static contadorEmpleado = 200;
    constructor(nombre, apellidos, edad, sueldo){
        super(nombre, apellidos, edad);
        this._sueldo=sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }
    toString(){
        return `${super.toString()}, trabaja con numero de empleado: ${this.idEmpleado} y cobra: ${this.sueldo} euros`
    }
}