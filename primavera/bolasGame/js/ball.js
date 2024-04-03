

export class Ball{
    static colors = [red, blue, green];
    constructor(){
        this.x = Math.floor(Math.random() * document.getElementById("gameArea").offsetWidth);
        this.y = Math.floor(Math.random() * document.getElementById("gameArea").offsetHeight);;
        this.vx = Math.random() * 20;
        this.vy = Math.random() * 20;
        this.color = colors[Math.floor(Math.random() * colors.lenght)];
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
        let newX = 0;
        let newY = 0;
        if(this.vx > 0){
            newX =+ this.vx;
        }else{
            newX =- this.vx;
        }

        if(this.vy > 0){
            newY =+ this.vy;
        }else{
            newY =- this.vy;
        }
    }

    checkCollision(){

    }
}