import {Orden} from "./clases/Orden.js";
import { Producto } from "./clases/Producto.js";


let producto1 = new Producto("camisa", 36);
let producto2 = new Producto("Americana", 214);
let producto3 = new Producto("Pantalon", 160);
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
console.log(orden1.toString());