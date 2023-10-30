
export class Producto{
    constructor(nombreProducto, precio){
        this._nombreProducto = nombreProducto;
        this._precio = precio;
    }
    get nombreProducto(){
        return this._nombreProducto;
    }
    set nombreProducto(nombreProducto){
        this._nombreProducto = nombreProducto;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
}