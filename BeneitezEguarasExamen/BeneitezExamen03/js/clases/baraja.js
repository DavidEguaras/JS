import { Carta } from "./carta.js";

export class Baraja{
    constructor(){
        this.cartas = crearBaraja()
    }

    //Metodos
    crearBaraja(){
        array = [];
        for(palos = 0; palos < 3; palos++){
            for(valor = 0; valor < 10; valor++){
                if(palo == 0){
                    array()
                }else if(palo == 1){

                }else if(palo == 2){

                }else{

                }
            }
        }
        return array;
    }

    barajar(){
        this.cartas.sort(() => Math.random() - 0.5);
    }

    sacarCarta(){
        this.cartas
    }

}

