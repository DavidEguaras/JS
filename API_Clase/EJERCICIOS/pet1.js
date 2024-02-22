const url = '';

const listaCiudades = document.createElement('ul');
document.body.appendChild(listaCiudades);

document.getElementById('b1').addEventListener('click', realizarPeticion);

function realizarPeticion() {
    // console.log('peticion 1');
    // peticion
    const peticion = new XMLHttpRequest();
    const url = 'http://192.168.7.100:3000/ciudades';
    peticion.open('GET', url);
    peticion.onreadystatechange = function () {
        // console.log(peticion.readyState);
        if (peticion.readyState == 4) { //hemos recibido

            if (peticion.status == 200) {
                const datos = JSON.parse(peticion.responseText) //JSON a array objetos
                // console.log("Datos recibidos", datos);

                mostrarNombreCiudad(datos);
            } else {
                console.log("Mala suerte: código de error", peticion.status);
            }

        }
    }
    peticion.send();
}

function mostrarNombreCiudad(datos) {


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

        liCiudad.addEventListener('click', function () {
            this.innerText = element.nombre + ": " + element.cantidad;
        })
    });


    // ulCiudad.innerText = JSON.stringify(datos);
}

document.getElementById('b2').addEventListener('click', realizarPeticion1);

function realizarPeticion1() {
    // console.log('peticion 1');
    // peticion
    const peticion = new XMLHttpRequest();
    const url = 'http://192.168.7.100:3000/ciudades';
    peticion.open('GET', url);
    peticion.onreadystatechange = function () {
        // console.log(peticion.readyState);
        if (peticion.readyState == 4) { //hemos recibido

            if (peticion.status == 200) {
                const datos = JSON.parse(peticion.responseText) //JSON a array objetos
                // console.log("Datos recibidos", datos);

                // mostrarNombreCiudad(datos);
                filtrarCiudades(datos);
            } else {
                console.log("Mala suerte: código de error", peticion.status);
            }

        }
    }
    peticion.send();
}

function filtrarCiudades(datos) {

    const datosForm = new FormData(document.getElementById('filtrarCiudades'));
    console.log(datosForm);
    const min = datosForm.get('min'); //name de los input del form
    const max = datosForm.get('max');

    listaCiudades.innerHTML = '';
    let liCiudad;
    let habitantes = [];
    let ciudades = [];

    console.log(datos);

    ciudades.push(datos.filter((e) => e.cantidad > min && e.cantidad < max));

    ciudades = Array.from(datos.filter((e) => e.cantidad > min && e.cantidad < max));

    console.log(ciudades);

    ciudades.forEach(ciudad => {
        liCiudad = document.createElement('li');
        listaCiudades.appendChild(liCiudad);

        liCiudad.innerText = ciudad.nombre;
        liCiudad.style.cursor = 'pointer';

        liCiudad.addEventListener('click', function () {
            this.innerText = ciudad.nombre + ": " + ciudad.cantidad;
        })

    });

}