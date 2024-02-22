// solucion con la API Fetch()
// dirIP_api = '192.168.7.101';
// PUERTO_EXPRESS = 3000;

document.getElementById('getCiudad').addEventListener('submit', (event) =>{
    event.preventDefault();
    const idCiudad = document.getElementById('id-ciudad').value;
    fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/${idCiudad}`)
        .then(datosCrudos=>{
            console.log(datosCrudos);
            return datosCrudos.json(); // devuelve una empresa
        })
        .then(datosObjeto=>{
            console.log(datosObjeto)
            //aqui pintamos los datos
            document.getElementById('p1').innerHTML = datosObjeto.nombre +": "+ datosObjeto.cantidad;
        })
        .catch(error=>console.log(error));
});
