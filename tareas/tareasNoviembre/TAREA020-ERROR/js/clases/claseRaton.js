import { DispositivoEntrada } from "./claseDispositivoEntrada";
import { formatoCuatroDigitos } from "./funciones";

export class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(){
        super(tipoEntrada, marca);
        this._idRaton = formatoCuatroDigitos(Raton.contadorRatones++);
    }

    toString(){
        const ratonString = `\n Raton n:${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}\n`;
        return ratonString;

    }
}