import { DispositivoEntrada } from "./claseDispositivoEntrada";
import { formatoCuatroDigitos } from "./funciones";

export class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(){
        super(tipoEntrada, marca);
        this._idTeclado = formatoCuatroDigitos(Teclado.contadorTeclados++);
    }

    toString(){
        const tecladoString = `\n Teclado n:${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}\n`;
        return tecladoString;
    }
}