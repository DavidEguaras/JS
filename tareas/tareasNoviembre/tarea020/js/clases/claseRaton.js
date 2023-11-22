import { DispositivoEntrada } from "./claseDispositivoEntrada.js";
import { formatoCuatroDigitos, primeraPalabra } from "./funciones.js";


export class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = "R" +formatoCuatroDigitos(Raton.contadorRatones++);
    }

    toString() {
        const ratonString = ` nº: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${primeraPalabra(this._marca)}\n`;
        return ratonString;
    }
}
