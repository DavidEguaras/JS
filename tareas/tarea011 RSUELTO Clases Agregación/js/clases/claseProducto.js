
export class Producto{
    constructor(nombre, precio){
        this._nombre=nombre;
        this._precio=precio;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.toLowerCase().slice(1);
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio.toLocaleString( undefined, { style: 'currency', currency: 'EUR' },
        {minimumFractionDigits: 2, maximumFractionDigits: 2}  );
    }
    set precio(precio){
        this._precio=precio;
    }
    
    toString(){
        return (`\t ${this.nombre} \t ${this.precio}`);
    }

}