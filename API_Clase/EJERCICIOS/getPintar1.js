function renderCiudad(datos){
    document.getElementById('p1').innerHTML = datos.nombre  + ": "+datos.cantidad;
}

function getCiudad(idCiudad, function_callback){
    const peticion=new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;
    peticion.open('GET', url+ '/ciudades/' + idCiudad);
    peticion.send();

    peticion.addEventListener('load', function(){
        if(peticion.status===200){
            const datos= JSON.parse(peticion.responseText); //en datos tenemos un objeto
            console.log(datos);
            function_callback(datos);
        } else {
            console.error("Error: "+ peticion.status + ": "+ peticion.statusText);
        }
    });
    
    // Manejar el evento error en caso de problemas de red
    peticion.addEventListener('error', function () {
        console.error('Error de red al realizar la solicitud');
    });
}

document.getElementById('getCiudad').addEventListener('submit', (event)=>{
    event.preventDefault();
    const idCiudad= document.getElementById('id-ciudad').value;
    datos=getCiudad(idCiudad, renderCiudad);
    console.log(datos);
});