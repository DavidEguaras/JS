export class Snake{
    constructor (coordenateX, coordenateY){
        this.segments = [{x:coordenateX, y:coordenateY}];
        this.cabeza = this.segments[0];
        this.speed

    }
}

// IMPORTANTE -> Para mover a la serpiente hay que hacer que la cabeza (primer elemento del array) y cada elemento que siga en el array debe tomar la posicion del elemento anterior del array

// -Creamos una clase serpiente definiendo sus atributos(el array de la serpiente, la velocidad y la posicion de cada elemento del array, direccion) y metodos (generarSerpiente, comer, moverse, comprobarColision)
// -Creamos una clase comida que se genere un cebo cada vez que la serpiente coma que tomara una posicion aleatoria donde no este ninguna parte de la serpiente.Atributos:color(aleatorio entre un array de colores), posicion Metodos:(generarComida)
// -Cuando el usuario entra en la pagina, tiene un boton para iniciar juego, que generara una serpiente y el primer cebo/comida
// -Cuando el usuario este jugando habra un boton para finalizar el juego (tambien habra un div con la puntuacion actual por encima del mapa)
// -El juego debe actualizarse cada segundo
// -El script una vez que el usuario inicie un juego: se ejecutara la funcion 

// iniciarJuego(){
// 	generarSerpiente()
// 	generarComida()
// 	while(juego){
// 		moverse()
// 		colision = comprobarColision()
// 		if (colision){
// 			juego === false
// 		}
// 		comer = comer() -> valor booleano (comer llama al final de su ejecucion a generarComida)
// 		if (!comer){
// 			juego === false
// 		}
// 	}
// }

