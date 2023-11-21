import { misFunciones } from "../libreria/misfunciones.js";
export class Bola {
    static arrayBolas=[];
    constructor (radio, posX, posY, colorBola, linearGradient){
        this.id= `idBola${misFunciones.formatearA3cifras(Bola.arrayBolas.length)}`;
        this._radio = radio;
        this._posX = posX;
        this._posY = posY;
        this._colorBola = colorBola;
        this._linearGradient = linearGradient;
        Bola.arrayBolas.push(this);
    }
    get radio() {
        return this._radio;
    }
    set radio(in_radio) {
        this._radio = in_radio;
    }
    
    get posX() {
        return this._posX;
    }
    set posX(in_posX) {
        this._posX = in_posX;
    }
    
    get posY() {
        return this._posY;
    }
    set posY(in_posY) {
        this._posY = in_posY;
    }
    
    get colorBola() {
        return this._colorBola;
    }
    set colorBola(in_colorBola) {
        this._colorBola = in_colorBola;
    }
    
    get linearGradient() {
        return this._linearGradient;
    }
    set linearGradient(in_linearGradient) {
        this._linearGradient = in_linearGradient;
    }
     
    visualizar(){
        const bolaElemento=document.createElement('DIV');
        bolaElemento.setAttribute('id', this.id);
        //bolaElemento.setAttribute('style', `width: ${parseInt(this.radio*2)}px; 
        bolaElemento.style.width=`${parseInt(this.radio*2)}px`; // Tamaño X
        bolaElemento.style.height=`${parseInt(this.radio*2)}px`; // tamaño Y
        //bolaElemento.style.float= 'left';
        bolaElemento.style.borderRadius='50%';
        bolaElemento.style.position='absolute';
        /* si queremo centrar la bola
        bolaElemento.style.top=`${this.innerHeight/2 - parseInt(bolaElemento.style.height)/2}px`;
        bolaElemento.style.left=`${this.innerWidth/2 - parseInt(bolaElemento.style.width)/2}px`;
        */
       bolaElemento.style.top=`${parseInt(this.posX)}px`;
       bolaElemento.style.left=`${parseInt(this.posY)}px`;
       //bolaElemento.style.background= 'linear-gradient(to bottom, #2196f3, #009688)';
       bolaElemento.style.background=this.linearGradient;
       bolaElemento.style.backgroundColor= `${this.colorBola}`;
        document.body.appendChild(bolaElemento);
    }

}