// Función que se ejecuta cuando la página se carga completamente
window.onload = function() {
    // Llama a la función para cargar las ciudades al cargar la página
    cargarCiudades();
}

// Función para cargar las ciudades desde la API y mostrarlas en la tabla
function cargarCiudades() {
    // Realiza una solicitud GET a la API para obtener los datos de las ciudades
    fetch('http://localhost:3000/ciudades')
        .then(response => response.json()) // Parsea la respuesta como JSON
        .then(data => {
            // Obtiene la referencia al cuerpo de la tabla
            const tablaCiudades = document.getElementById('tablaCiudades').getElementsByTagName('tbody')[0];
            tablaCiudades.innerHTML = ''; // Limpia el contenido anterior de la tabla

            // Itera sobre los datos de las ciudades recibidos
            data.forEach(ciudad => {
                // Crea una fila de la tabla con los datos de la ciudad y un botón de "Editar"
                const fila = `
                    <tr>
                        <td>${ciudad.id}</td>
                        <td>${ciudad.nombre}</td>
                        <td>${ciudad.cantidad}</td>
                        <td><button onclick="editarCiudad(${ciudad.id},'${ciudad.nombre}','${ciudad.cantidad}')">Editar</button></td>
                    </tr>
                `;
                tablaCiudades.innerHTML += fila; // Agrega la fila a la tabla
            });
        })
        .catch(error => console.error('Error al cargar ciudades:', error)); // Maneja errores de la solicitud
}

// Función para mostrar el formulario de edición con los datos de la ciudad seleccionada
function editarCiudad(id, nombre, habitantes) {
    // Asigna los valores de la ciudad seleccionada al formulario de edición
    document.getElementById('idEditar').value = id;
    document.getElementById('nombreEditar').value = nombre;
    document.getElementById('habitantesEditar').value = habitantes;
    // Muestra el formulario de edición
    document.getElementById('formularioEdicion').style.display = 'block';
}

// Función para cancelar la edición y ocultar el formulario de edición
function cancelarEdicion() {
    // Oculta el formulario de edición
    document.getElementById('formularioEdicion').style.display = 'none';
}



// Manejador de eventos para el formulario de edición
document.getElementById('formularioEditar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtiene los valores del formulario de edición
    const id = document.getElementById('idEditar').value;
    const nuevoNombre = document.getElementById('nombreEditar').value;
    const habitantes = document.getElementById('habitantesEditar').value;

    // Realiza una solicitud PUT a la API para actualizar los datos de la ciudad
    fetch(`http://localhost:3000/ciudades/put/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON
        },
        // Convierte los datos a formato JSON y los envía en el cuerpo de la solicitud
        body: JSON.stringify({ nuevoNombre: nuevoNombre, habitantes: habitantes })
    })
    .then(response => response.json()) // Parsea la respuesta como JSON
    .then(data => {
        console.log('Ciudad actualizada:', data); // Muestra un mensaje en la consola
        cargarCiudades(); // Recarga la tabla con los datos actualizados
        cancelarEdicion(); // Oculta el formulario de edición
    })
    .catch(error => console.error('Error al actualizar ciudad:', error)); // Maneja errores de la solicitud
});
