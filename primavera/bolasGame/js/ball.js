

export class Ball{
    static colors = [red, blue, green];
    constructor(){
        this.x = Math.floor(Math.random() * document.getElementById("gameArea").offsetWidth);
        this.y = Math.floor(Math.random() * document.getElementById("gameArea").offsetHeight);;
        this.vx = Math.random() * 20;
        this.vy = Math.random() * 20;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw(){
        const ball = document.createElement('div');
        ball.classList.add("ball");
        ball.style.backgroundColor = this.color;
        ball.style.left = `${this.x}px`; 
        ball.style.top = `${this.y}px`; 

        const gameArea = document.getElementById("gameArea");
        gameArea.appendChild(ball)
    }

    move(){
        
            this.x += this.vx;

            this.y += this.vy;
    }

    checkCollisionWalls(){
        if(this.x <= 0 || this.x >= document.getElementById("gameArea").offsetWidth - 50){
            this.vx =- this.vx;
        }
        if(this.y <= 0 || this.x >= document.getElementById("gameArea").offsetHeight - 50){
            this.vy =- this.vy;
        }
    }
}