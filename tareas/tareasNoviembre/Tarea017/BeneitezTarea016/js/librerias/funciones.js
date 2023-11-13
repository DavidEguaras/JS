
//funcion para convertir un 1 a 001, 2 a 002...
export function formatearA3cifras (numero){
    return numero.toString().padStart(3, '0');
}

export function crearBotonCentrado(){
    const boton = document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', 'position: absolute');
    boton.value="Boola";
    boton.style.top = `${window.innerHeight - 50}px`;
    boton.style.left = `${window.innerWidth / 2}px`;
    boton.style.zIndex = 1;
    document.body.appendChild(boton);
    return boton;
}