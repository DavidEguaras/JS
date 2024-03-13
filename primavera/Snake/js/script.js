import { Snake } from "./snake.js";

let snake = new Snake(0, 0);

document.addEventListener("keydown", function(event){
    console.log(event);
    switch(event.key){
        case "ArrowDown":
            snake.direction = 'down';
            break;
        case "ArrowUp":
            snake.direction = 'up';
            break;
        case "ArrowLeft":
            snake.direction = 'left';
    }
});


