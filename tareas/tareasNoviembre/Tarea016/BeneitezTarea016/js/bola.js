import { formatoTresDigitos } from "./funciones.js";

export class Bola {
    static arrayBolas = [];
  
    constructor(radio, posX, posY, colorBola, linearGradient) {
      this._idBola = "idBola" + formatoTresDigitos(Bola.arrayBolas.length + 1);
      this._radio = radio;
      this._posX = posX;
      this._posY = posY;
      this._colorBola = colorBola;
      this._linearGradient = linearGradient;
  
      Bola.arrayBolas.push(this);
    }

  //=================getters & setters=================
  get idBola() {
    return this._idBola;
  }

  get posX() {
    return this._posX;
  }

  set posX(PosX) {
    this._posX = PosX;
  }

  get posY() {
    return this._posY;
  }

  set posY(PosY) {
    this._posY = PosY;
  }

  get colorBola() {
    return this._colorBola;
  }

  set colorBola(ColorBola) {
    this._colorBola = ColorBola;
  }

  get linearGradient() {
    return this._linearGradient;
  }

  set linearGradient(LinearGradient) {
    this._linearGradient = LinearGradient;
  }

  //=================getters & setters=================

  //=================METODOS=================
  agregarBola(bola) {
    Bola.arrayBolas.push(bola);
  }

 
  verBola() {
    const bolaDiv = document.createElement("div");
    bolaDiv.id = this._idBola;
    bolaDiv.style.width = 2 * this._radio + "px";
    bolaDiv.style.height = 2 * this._radio + "px";
    bolaDiv.style.borderRadius = "50%";
    bolaDiv.style.position = "absolute";
    bolaDiv.style.top = this._posY + "px";
    bolaDiv.style.left = this._posX + "px";
    bolaDiv.style.backgroundColor = this._colorBola;
    bolaDiv.style.background = this._linearGradient || this._colorBola;
  
    document.body.appendChild(bolaDiv);
  }
  //=================METODOS=================
}
