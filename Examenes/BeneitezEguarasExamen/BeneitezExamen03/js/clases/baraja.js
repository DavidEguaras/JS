import { Carta } from "./carta.js";

export class Baraja{
    constructor(){
        this.cartas = crearBaraja()


    barajar(){
        this.cartas.sort(() => Math.random() - 0.5);
    }

    sacarCarta(){
        this.cartas
    }

}

