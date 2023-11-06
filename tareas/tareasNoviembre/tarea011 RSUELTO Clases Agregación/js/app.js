 import { Producto } from "./clases/claseProducto.js";
 import { Orden } from "./clases/claseOrden.js";

let p1=new Producto('Camisa', 36);
//console.log(p1.toString());
let p2 = new Producto('PANtalón', 160.5);
let p3 = new Producto('ameRICana', 214);
// console.log(p2.toString());
// console.log(p3.toString());

let o1=new Orden();
o1.agregarProducto(p1);
o1.agregarProducto(p3);
o1.agregarProducto(p2);
let o2=new Orden();
o2.agregarProducto(p2);
o2.agregarProducto(p3);
o2.agregarProducto(p3);
o2.agregarProducto(p3);
o2.agregarProducto(p3);
o2.agregarProducto(p3);
o2.agregarProducto(p3);
o2.agregarProducto(p3);
o2.agregarProducto(p3);

console.log(o1.toString());
console.log(o2.toString());
