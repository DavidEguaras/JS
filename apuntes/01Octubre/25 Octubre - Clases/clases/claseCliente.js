import { Persona } from "./clasePersona.js";

export class Cliente extends Persona{
    static contadorCliente = 300;
    constructor(nombre, apellidos, edad, sueldo){
        super(nombre, apellidos, edad);
        this._sueldo=sueldo;
        this._id = ++Cliente.contadorCliente;
    }
    toString(){
        return `${super.toString()}`
    }
}