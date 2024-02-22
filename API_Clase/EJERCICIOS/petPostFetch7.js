// solucion con la API Fetch() controlando los errores
// dirIP_api = '192.168.7.101';
// PUERTO_EXPRESS = 3000;

document.getElementById('addCiudad').addEventListener('submit', (event) =>{
    event.preventDefault();
    const datosBody={
        nuevoNombre: document.getElementById('nuevoNombre').value,
        habitantes: document.getElementById('habitantes').value
    }


    fetch(`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`, {
        method: 'POST', // o PUT o PATCH o DELETE
        body: JSON.stringify(datosBody),
        header:{
            'Content-Type': 'application/json'
        }
    })
        .then(datosCrudos=>{
            if(!datosCrudos.ok){
                //lanzamos una excepción (error) que intercepta el catch()
                throw `Cuidado: ${datosCrudos.status}: ${datosCrudos.statusText}`;
            }
            console.log(datosCrudos);
            return datosCrudos.json(); // devuelve una empresa
        })
        .then(datosObjeto=>{
            console.log(datosObjeto)
            //aqui pintamos los datos
            document.getElementById('p1').innerHTML = "Ciudad añadida"+ datosBody.nuevoNombre +": "+ datosBody.habitantes;
        })
        .catch(error=>console.log(error));
});
