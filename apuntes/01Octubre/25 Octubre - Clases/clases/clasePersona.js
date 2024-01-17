export class Persona{
    static contadorPersonas=100;
    constructor(nombre, apellidos, edad){
        this._id=++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre[0].toUpperCase() + this.nombre.toLowerCase().slice(1);
    }
    set nombre(nombre){
        this
    }
    toString(){
        return `${this.nombre} con id: ${this.id}, tiene: ${this.edad} años`
    }
    
}