import { formatoCuatroDigitos, primeraPalabra } from "./funciones.js";


export class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor ="M" + formatoCuatroDigitos(Monitor.contadorMonitores++);
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    set marca(marca){
        this._marca = marca
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca
    }

    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        let monitorString = '';
        monitorString += ` nº: ${this._idMonitor}, Marca : ${primeraPalabra(this._marca)}, tamano: ${this._tamano}"\n`;
        return monitorString;
    }
}