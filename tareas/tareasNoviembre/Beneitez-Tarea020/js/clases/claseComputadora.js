import { formatoCuatroDigitos } from "./funciones.js";
export class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = "PC" + formatoCuatroDigitos(Computadora.contadorComputadoras++);
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    // Getters y Setters para los atributos

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(nuevoMonitor) {
        if (nuevoMonitor instanceof Monitor) {
            this._monitor = nuevoMonitor;
        } else {
            throw new Error('El valor asignado a monitor debe ser una instancia de la clase Monitor');
        }
    }

    get teclado() {
        return this._teclado;
    }
    set teclado(nuevoTeclado) {
        if (nuevoTeclado instanceof Teclado) {
            this._teclado = nuevoTeclado;
        } else {
            throw new Error('El valor asignado a teclado debe ser una instancia de la clase Teclado');
        }
    }

    get raton() {
        return this._raton;
    }
    set raton(nuevoRaton) {
        if (nuevoRaton instanceof Raton) {
            this._raton = nuevoRaton;
        } else {
            throw new Error('El valor asignado a raton debe ser una instancia de la clase Raton');
        }
    }

   toString(){
        let computadoraString = '';
        computadoraString += `-------------------------------------------`;
        computadoraString += `\nPC id: ${this.idComputadora},  ${this.nombre}\n`;
        computadoraString += `-------------------------------------------\n`;
        computadoraString += `*******************************************************`;
        computadoraString += `\nMonitor:${this._monitor.toString()}`;
        computadoraString += `\nTeclado:${this._teclado.toString()}`;
        computadoraString += `\nRaton:${this._raton.toString()}\n`;
        computadoraString += `*******************************************************\n`;

        return computadoraString;
   }
}