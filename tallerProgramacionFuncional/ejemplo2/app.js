function crearContador(){
    let contador = 0;

    function incrementarContador(){
        contador++;
    }

    function disminuirContador (){
        if(contador > 0){
            contador--;
        }
    }

    function devolverContador(){
        return contador;
    }

    return{
        incrementarContador : incrementarContador,
        disminuirContador : disminuirContador,
        devolverContador : devolverContador
    };

}

let miContador = crearContador();

function mostrarContador(){
    document.getElementById("valorContador").textContent = miContador.devolverContador();
    miContador.devolverContador();
}
function incrementarContador(){
    miContador.incrementarContador();
}
function disminuirContador(){
    miContador.disminuirContador();
}