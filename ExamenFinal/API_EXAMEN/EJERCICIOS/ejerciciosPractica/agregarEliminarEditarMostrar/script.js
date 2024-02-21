// JavaScript para interactuar con la API
// Desarrolla una página web basada en esta API ciudades que permita mostrar, modificar, eliminar y agregar registros utilizando peticiones simples al servidor. La página debe:
// Mostrar todos los registros de ciudades en una tabla donde se vean los valores de los campos.
// Para cada registro, incluir botones que permitan al usuario modificar o eliminar ese registro.
// Al hacer clic en el botón de modificar, mostrar un formulario con los campos correspondientes al registro seleccionado, permitiendo al usuario modificar la información.
// Al confirmar la modificación, enviar los datos actualizados al servidor y actualizar la tabla con los nuevos datos.
// Al hacer clic en el botón de eliminar, enviar una petición al servidor para eliminar el registro seleccionado y actualizar la tabla sin ese registro.
// Incluir un formulario separado con campos para agregar un nuevo registro a la base de datos.
// Al enviar el formulario de agregar, enviar los datos al servidor para agregar el nuevo registro y actualizar la tabla con los nuevos datos, mostrando la nueva ciudad agregada.
// Función para cargar las ciudades al cargar la página
window.onload = function() {
    cargarCiudades();
}

// Función para cargar las ciudades desde la API y mostrarlas en la tabla
function cargarCiudades() {
    fetch('http://localhost:3000/ciudades')
        .then(response => response.json())
        .then(data => {
            const tablaCiudades = document.getElementById('tablaCiudades').getElementsByTagName('tbody')[0];
            tablaCiudades.innerHTML = '';

            data.forEach(ciudad => {
                const fila = `
                    <tr>
                        <td>${ciudad.id}</td>
                        <td>${ciudad.nombre}</td>
                        <td>${ciudad.cantidad}</td>
                        <td>
                            <button onclick="editarCiudad(${ciudad.id})">Editar</button>
                            <button onclick="eliminarCiudad(${ciudad.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
                tablaCiudades.innerHTML += fila;
            });
        })
        .catch(error => console.error('Error al cargar ciudades:', error));
}

// Función para enviar una solicitud de edición de ciudad al servidor
function editarCiudad(id) {
    // Obtener los datos de la ciudad a editar
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const habitantes = prompt('Ingrese la nueva cantidad de habitantes:');
    
    if (nuevoNombre !== null) { // Verificar si se ingresó un nombre
        fetch(`http://localhost:3000/ciudades/put/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nuevoNombre: nuevoNombre, habitantes: habitantes }) // Asegúrate de que el nombre coincida con el esperado en el servidor
        })
        .then(response => response.json())
        .then(data => {
            console.log('Ciudad actualizada:', data);
            cargarCiudades(); // Recargar la tabla con los datos actualizados
        })
        .catch(error => console.error('Error al actualizar ciudad:', error));
    }
}

// Función para enviar una solicitud de eliminación de ciudad al servidor
function eliminarCiudad(id) {
    if (confirm('¿Estás seguro de eliminar esta ciudad?')) {
        fetch(`http://localhost:3000/ciudades/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.mensaje);
            cargarCiudades(); // Recargar la tabla sin el registro eliminado
        })
        .catch(error => console.error('Error al eliminar ciudad:', error));
    }
}

// Manejador de eventos para el formulario de agregar ciudad
// Manejador de eventos para el formulario de agregar ciudad
document.getElementById('formularioAgregar').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nuevoNombre = document.getElementById('nombre').value; // Cambia "nombre" a "nuevoNombre"
    const habitantes = document.getElementById('habitantes').value;

    if (nuevoNombre.trim() !== '') { // Verificar si el nombre no está vacío
        fetch('http://localhost:3000/ciudades/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nuevoNombre: nuevoNombre, habitantes: habitantes }) // Cambia "nombre" a "nuevoNombre"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Ciudad agregada:', data);
            cargarCiudades(); // Recargar la tabla con los nuevos datos
            document.getElementById('formularioAgregar').reset(); // Limpiar el formulario
        })
        .catch(error => console.error('Error al agregar ciudad:', error));
    } else {
        alert('Por favor, ingrese un nombre para la ciudad.');
    }
});
