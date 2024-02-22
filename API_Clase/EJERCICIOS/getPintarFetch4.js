// funcion fetch() que simula la API Fetch
function fetch0(url){
    return new Promise((resolve, reject) =>{
        const peticion = new XMLHttpRequest();
        peticion.open('GET', url);
        peticion.send();
        peticion.addEventListener('load', function(){
            resolve(peticion.responseText);
        })
    });
}

document.getElementById('getCiudad').addEventListener('submit', (event) =>{
    event.preventDefault();
    const url = 'http://192.168.7.101:3000';
    const idCiudad = document.getElementById('id-ciudad').value;
    fetch0(url + '/ciudades/' + idCiudad)
        .then(datosCrudos=>{
            console.log(datosCrudos);
            return JSON.parse(datosCrudos);
        })
        .then(datosObjeto=>console.log(datosObjeto))
        .catch(error=>console.log(error));
});