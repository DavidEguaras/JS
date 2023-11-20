import { dispositivoEntrada } from "./dispositivoEntrada";

export class Raton extends DispositivoEntradaEntrada {
    contadorRatones = 0;
    constructor(idRaton){
        super();
        this._idRaton = formatoCuatroDigitos(this.contadorRatones + 1);
        Raton.contadorRatones++;
    }
}