import { Producto } from "./Producto.js";
export class Orden {
    static numeroOrden = 0;
    static MAX_PRODUCTOS

    constructor() {
        this._id = ++Orden.numeroOrden;
        this._arrayProductos = [];
    }

    get id() {
        return this._id;
    }

    get arrayProductos() {
        return this._arrayProductos;
    }

    set id(id) {
        this._id = id;
    }

    set arrayProductos(arrayProductos) {
        this._arrayProductos = arrayProductos;
    }

    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this.arrayProductos.push(producto);
        } else {
            console.error("Error: El objeto no es una instancia de Producto.");
        }
    }

    toString() {
        let ticket = `_____________________`;
        ticket += `\nOrden: ${this.id.toString().padStart(3, '0')}\n`;
        let totalPrecio = 0;

        this.arrayProductos.forEach((producto) => {
            ticket += `Producto: ${producto.nombreProducto}   -   ${producto.precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}\n`;
            totalPrecio += producto.precio;
        });

        ticket += `======================\n`;
        ticket += `Total: ${totalPrecio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}\n`;
        return ticket;
    }
}