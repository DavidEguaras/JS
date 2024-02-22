//peticion GET con JSON solucion con promesas
// const dirIP_api
// const PUERTO_EXPRESS

function getCiudad(idCiudad){
    return new Promise((resolve, reject) =>{
        const peticion = new XMLHttpRequest();
        peticion.open('GET', 'http://192.168.7.101:3000/ciudades/' + idCiudad );
        peticion.send();
        peticion.addEventListener('load', function(){
            if(peticion.status == 200){
                console.log(JSON.parse(peticion.responseText));
                resolve(JSON.parse(peticion.responseText));
            }else{
                reject("Error" + peticion.status + ": " + peticion.statusText)
            }
        })
 
        peticion.addEventListener('error', function() {
            console.error("Error de red al realizar la solicitud");
        })
    });
 
}

document.getElementById('getCiudad').addEventListener('submit', (event) =>{
    event.preventDefault();
    const idCiudad = document.getElementById('id-ciudad').value;
    getCiudad(idCiudad)
        // Pintamos datos en la pagina o mostramos el error
        .then(datos =>document.getElementById('p1').innerHTML = datos.nombre + ": " + datos.cantidad)
        .catch(error => console.error("jojojo" + error));
});