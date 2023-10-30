import { Producto } from "./Producto.js";
export class Orden{
    static numeroOrden = 0;

    articulos = [];

    constructor (){
        this.id = ++numeroOrden;
        this.arrayProductos = [];
    }

    agregarProduto(producto){
        this._arrayProductos.push
    }
}