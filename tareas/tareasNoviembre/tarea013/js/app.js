const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 
'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const botonMes = document.createElement('button');
botonMes.innerText = "Añadir Mes";
document.body.appendChild(botonMes);
botonMes.addEventListener('click', agregarOquitarMes);

const listaMeses = document.createElement('ul');
document.body.appendChild(listaMeses);

let contador = 0;
let interruptorMes = true;

function agregarOquitarMes() {
    if (interruptorMes) {
        if (contador < arrayMeses.length) {
            let mes = document.createElement('li');
            let nombreMes = arrayMeses[contador];
            let textoMes = document.createTextNode(nombreMes);
            mes.appendChild(textoMes);
            listaMeses.appendChild(mes);
            contador++;
        }
    } else {
        if (contador > 0) {
            let mes_a_borrar = document.getElementsByTagName('li')[contador - 1];
            listaMeses.removeChild(mes_a_borrar);
            contador--;
        }
    }
    if (contador >= arrayMeses.length) {
        interruptorMes = false;
        botonMes.innerText = "Eliminar Mes";
    }
    if (contador === 0) {
        interruptorMes = true;
        botonMes.innerText = "Añadir Mes";
    }
}
