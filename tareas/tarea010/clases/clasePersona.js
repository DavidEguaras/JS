export class Persona {
    static get MAXIMO_AFORO(){
      return 106; 
    }
    constructor(nombre, apellidos, edad) {
      if (Persona.MAXIMO_AFORO <= contadorPersonas){
        this._id = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
      }
    }
  
    get id() {
      return this._id;
    }
  
    set id(id){
        this._id = id;
    }
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get apellidos() {
      return this._apellidos;
    }
    set apellidos(apellidos) {
      this._apellidos = apellidos;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(edad) {
      this._edad = edad;
    }
  
    toString() {
      return `${this._nombre} con ID: ${this._id}, tiene ${this._edad} años`;
    }
  }