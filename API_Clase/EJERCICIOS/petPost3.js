// peticion POST con FormData
const dirIP_api = '127.0.0.1'; // 0 asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // 0 asignar el valor que necesitas

document.getElementById('addCiudad').addEventListener('submit', (event)=>{
    event.preventDefault();
    //Obtener datos del formulario
    const datosForm = new FormData(document.getElementById('addCiudad'));
    console.log(datosForm);
    const nuevoNombre = datosForm.get('nuevoNombre'); //name de los input del form
    const habitantes = datosForm.get('habitantes');
    // datosForm.append('otroDato', 'valorTexto');
    // console.log(datosForm.get('otroDato'));
    console.log(nuevoNombre);
    console.log(habitantes);

    const peticion = new  XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`;
    peticion.open('POST', url);
    peticion.send(datosForm);
    peticion.addEventListener('load', function(){
        //procesando los datos
        console.log(peticion.responseText);
    });
});