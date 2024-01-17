let nuevaVentana;
function abrirVentana(){
    nuevaVentana = window.open("", "nombreVentana", "width=500, height=200, left=200, top=100");
    const boton1 = nuevaVentana.document.createElement('button');
    nuevaVentana.document.write("<h2> Viejo huesudo folla como loco, ¡sin usar pastillas! </h2>");
    boton1.innerText = "Cerrar Ventana";
    
    nuevaVentana.document.body.appendChild(boton1);
    boton1.addEventListener ('click', cerrarVentana);
}

function desplazarVentana(){
    nuevaVentana.moveBy(40, 50);
}

function cerrarVentana (){
    nuevaVentana.close();
}

const idTimeout = setTimeout (abrirVentana, 2000);