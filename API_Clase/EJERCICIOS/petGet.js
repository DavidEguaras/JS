const url = '';

const listaCiudades = document.createElement('ul');
document.body.appendChild(listaCiudades);

document.getElementById('b1').addEventListener('click', realizarPeticion);

function realizarPeticion() {
    console.log('peticion 1');
    // peticion
    const peticion = new XMLHttpRequest();
    const url = 'http://127.0.0.1:3000/ciudades';
    peticion.open('GET', url);
    peticion.onreadystatechange = function () {
        console.log(peticion.readyState);
        if (peticion.readyState == 4) { //hemos recibido

            if (peticion.status == 200) {
                const datos = JSON.parse(peticion.responseText) //JSON a array objetos
                console.log("Datos recibidos", datos);

                mostrarNombreCiudad(datos);
            } else {
                console.log("Mala suerte: código de error", peticion.status);
            }

        }
    }
    peticion.send();
}

function mostrarNombreCiudad(datos){
    

    listaCiudades.innerHTML = '';
    let liCiudad;

    console.log(datos);
    let conta = 0;

    datos.forEach(element => {
        conta++;
        liCiudad = document.createElement('li');
        listaCiudades.appendChild(liCiudad);
        liCiudad.id = conta;

        liCiudad.innerText = element.nombre;
        liCiudad.style.cursor = 'pointer';
        // console.log(element);

        liCiudad.addEventListener('click', function(){
            this.innerText = element.nombre+": "+element.cantidad;
        })
    });


    // ulCiudad.innerText = JSON.stringify(datos);
}
