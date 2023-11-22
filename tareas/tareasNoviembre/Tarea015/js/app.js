
let contadorClicks = 0;

function cambiarColor(element){
    contadorClicks++;
    let contadorID = element.querySelector("#contador");
    contadorID.innerHTML = contadorClicks;

    if (element.style.backgroundColor == 'red'){
        element.style.backgroundColor = 'white';
    }else{
        element.style.backgroundColor = 'red';
    }
}