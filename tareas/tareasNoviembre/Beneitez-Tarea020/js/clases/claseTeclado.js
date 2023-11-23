import { DispositivoEntrada } from "./claseDispositivoEntrada.js";
import { formatoCuatroDigitos, primeraPalabra } from "./funciones.js";

export class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = "T" +formatoCuatroDigitos(Teclado.contadorTeclados++);
    }

    toString(){
        const tecladoString = ` nº: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${primeraPalabra(this._marca)}\n`;
        return tecladoString;
    }
}