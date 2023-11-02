//import {Producto} from './claseProducto.js';
Number.prototype.moneda = function () {
  return this.toLocaleString("es-ES", {
    style: "currency",

    currency: "EUR",
  });
}; 
Number.prototype.agrupa= function(){
    return this.toLocaleString(undefined,
        { minimumIntegerDigits: 3, useGrouping: false});
}

export class Orden{
    static numOrden=0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._id=++Orden.numOrden;
        this.arrayProductos=[];
    }
    agregarProducto(producto){
        if (this.arrayProductos.length < Orden.MAX_PRODUCTOS){
            this.arrayProductos.push(producto);
        } else {
            console.log("No caben más productos en la Orden: "+ Orden.numOrden.agrupa());
        }
    }

    get id() {
        return this._id.toLocaleString(undefined,
            { minimumIntegerDigits: 3, useGrouping: false}); //dejo useGrouping para recordar la propiedad
    }
    toString(){
        const encabezado=`\n______________________\nOrden: ${this.id}\n`;
        const cuerpo= this.arrayProductos.reduce((cadenaAnterior,productoActual) =>
             `${cadenaAnterior}\n${productoActual.toString()} `, encabezado
            );
        
        // let cuerpo="";
        // this.arrayProductos.forEach(producto=>cuerpo+=`\n\t${producto.toString()}`)

        const total=this.arrayProductos.reduce((total, producto)=> total+=producto._precio,0);
        const pie = `\n-------------------\nTotal: \t ${total.moneda()}`;
        //return encabezado+cuerpo+pie;
        return cuerpo+pie;
    }
}