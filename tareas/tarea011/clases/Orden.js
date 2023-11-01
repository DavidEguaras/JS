import { Producto } from "./Producto.js";

export class Orden {
    static numeroOrden = 0;

    constructor() {
        this.id = ++Orden.numeroOrden;
        this.arrayProductos = [];
    }
    

    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this.arrayProductos.push(producto);
            console.log(`Producto "${producto.nombre}" agregado a la orden.`);
        }else {
            console.error("Error: El objeto no es una instancia de Producto.");
        }
    }

    toString() {
        let ticket = `_____________________\nOrden: ${this.id.toString().padStart(3, '0')}\n`;
        let totalPrecio = 0;
        this.arrayProductos.forEach((producto) => {
            ticket += `Producto: ${producto.nombre}   -   ${producto.precio}€\n`;
            totalPrecio += producto.precio;
        });
        ticket += `======================\n`;
        ticket += `Total: ${totalPrecio}€`;
        return ticket;
    }

}
