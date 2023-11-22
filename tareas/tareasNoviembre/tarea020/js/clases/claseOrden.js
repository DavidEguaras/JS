import { Computadora } from "./claseComputadora.js";
import { formatoCuatroDigitos } from "./funciones.js";

export class Orden {
    static numeroOrdenes = 0;
    constructor(...computadoras) {
        this._idOrden = formatoCuatroDigitos(Orden.numeroOrdenes++);
        this.arrayComputadoras = [];

        for (const computadora of computadoras) {
            if (computadora instanceof Computadora) {
                this.arrayComputadoras.push(computadora);
            } else {
                throw new Error('El valor asignado a computadora debe ser una instancia de la clase Computadora');
            }
        }
    }

    agregarComputadora(computadora) {
        if (computadora instanceof Computadora) {
            this.arrayComputadoras.push(computadora);
        } else {
            throw new Error('El valor asignado a computadora debe ser una instancia de la clase Computadora');
        }
    }

    mostrarOrden(){
        console.log(` ========================= ORDEN: ${this._idOrden} =========================`);
        this.arrayComputadoras.forEach((computadora) => {
            console.log(computadora.toString());
        });
        console.log(" ============================= FIN =============================");
        console.log(`\n\n\n\n`);
    }
}
