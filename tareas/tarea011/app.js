import {Orden} from "./clases/Orden.js";
import { Producto } from "./clases/Producto.js";


let producto1 = new Producto("camisa", 36);

let orden1 = new Orden();
orden1.agregarProducto(producto1);