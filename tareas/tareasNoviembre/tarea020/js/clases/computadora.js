import { formatoTresDigitos } from "./funciones";

export class Computadora{
    static contadorComputadoras = 0;
    constructor(idComputadora, nombre, monitor, teclado, raton){

        this._idComputadora = "idComputadora: " + formatoTresDigitos(Orden.arrayComputadoras.length + 1);
        // this._idComputadora = ++Computadora.contadorComputadoras;
    }
}