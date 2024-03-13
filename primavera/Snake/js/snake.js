

export class Snake{
    constructor (coordenateX, coordenateY, direction){
        this.bodyParts = [{x:coordenateX, y:coordenateY}];
        this.head = this.bodyParts[0];
        this.speed = 20;
        this.direction = direction;
    }



    checkEat(){

    }

    move(){

    }

    //boolean
    checkCollisionWall(){

    }

    checkCollisionBody(){

    }

    drawSnake(){

    }
}
