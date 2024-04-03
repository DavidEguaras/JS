export class Snake {
    constructor(coordinateX, coordinateY, direction) {
        this.bodyParts = [            
            { x: coordinateX, y: coordinateY },
            { x: coordinateX - 20, y: coordinateY }];
        this.head = this.bodyParts[0];
        this.speed = 20;
        this.direction = direction;
    }

    
    move() {
        let newX = this.head.x;
        let newY = this.head.y;
    
        switch (this.direction) {
            case 'up':
                newY -= this.speed;
                break;
            case 'down':
                newY += this.speed;
                break;
            case 'left':
                newX -= this.speed;
                break;
            case 'right':
                newX += this.speed;
                break;
        }

        //Muevo todo el cuerpo menos la cabeza, que la mueven los input
        for (let i = 1; i < this.bodyParts.length; i++) {
            this.bodyParts[i].x = this.bodyParts[i - 1].x;
            this.bodyParts[i].y = this.bodyParts[i - 1].y;
        }

        this.head.x = newX;
        this.head.y = newY;
    }

    
    checkEat(food) {
        return this.head.x === food.x && this.head.y === food.y;
    }

    grow() {
        const lastPart = this.bodyParts[this.bodyParts.length - 1];
        this.bodyParts.push({ x: lastPart.x, y: lastPart.y });
    }
    
    checkCollisionWall() {
        if (this.head.x < 0 || this.head.x >= 400 || this.head.y < 0 || this.head.y >= 400) {
            return true;
        } else {
            return false;
        }
    }
    
    checkCollisionBody() {
        //Corregi esto, empezaba a iterar por el 0 lo que provocaba que al crecer con la comida colisionara
        for (let i = 1; i < this.bodyParts.length; i++) {
            if (this.head.x === this.bodyParts[i].x && this.head.y === this.bodyParts[i].y) {
                return true;
            }
        }
        return false;
    }


    drawSnake(gameArea) {
        gameArea.innerHTML = '';
        this.bodyParts.forEach((part) => {
            const snakeSegment = document.createElement('div');
            snakeSegment.style.width = '20px';
            snakeSegment.style.height = '20px';
            snakeSegment.style.backgroundColor = 'aqua';
            snakeSegment.style.position = 'absolute';
            snakeSegment.style.left = `${part.x}px`;
            snakeSegment.style.top = `${part.y}px`;
            gameArea.appendChild(snakeSegment);
        });
    }
}
