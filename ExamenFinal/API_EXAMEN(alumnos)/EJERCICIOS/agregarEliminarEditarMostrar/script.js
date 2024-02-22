// Cuando la ventana se carga, se llama a la función cargarAlumnos para mostrar los alumnos en la tabla
window.onload = function() {
    cargarAlumnos();
}

// Función para cargar los alumnos desde la API y mostrarlos en la tabla
function cargarAlumnos() {
    fetch('http://localhost:3000/alumnos') // Realiza una solicitud GET para obtener los alumnos
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(data => {
            const tablaAlumnos = document.getElementById('tablaAlumnos').getElementsByTagName('tbody')[0];
            tablaAlumnos.innerHTML = '';

            // Para cada alumno en los datos recibidos, crea una fila en la tabla con botones para editar y eliminar
            data.forEach(alumno => {
                const fila = `
                    <tr>
                        <td>${alumno.id}</td>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.edad}</td>
                        <td>
                            <button onclick="editarAlumno(${alumno.id})">Editar</button>
                            <button onclick="eliminarAlumno(${alumno.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
                tablaAlumnos.innerHTML += fila;
            });
        })
        .catch(error => console.error('Error al cargar alumnos:', error));
}

// Función para enviar una solicitud de edición de alumno al servidor
function editarAlumno(id) {
    // Obtiene los nuevos datos del alumno a través de un prompt
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const edad = prompt('Ingrese la nueva edad:');
    
    if (nuevoNombre !== null) { // Verifica si se ingresó un nombre
        fetch(`http://localhost:3000/alumnos/put/${id}`, {
            method: 'PUT', // Realiza una solicitud PUT para actualizar el alumno
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nuevoNombre: nuevoNombre, edad: edad }) // Envía los nuevos datos en formato JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Alumno actualizado:', data);
            cargarAlumnos(); // Recarga la tabla con los datos actualizados
        })
        .catch(error => console.error('Error al actualizar alumno:', error));
    }
}

// Función para enviar una solicitud de eliminación de alumno al servidor
function eliminarAlumno(id) {
    if (confirm('¿Estás seguro de eliminar este alumno?')) {
        fetch(`http://localhost:3000/alumnos/${id}`, {
            method: 'DELETE' // Realiza una solicitud DELETE para eliminar el alumno
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.mensaje);
            cargarAlumnos(); // Recarga la tabla sin el registro eliminado
        })
        .catch(error => console.error('Error al eliminar alumno:', error));
    }
}

// Manejador de eventos para el formulario de agregar alumno
document.getElementById('formularioAgregar').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nuevoNombre = document.getElementById('nombre').value; // Obtiene el nombre y la edad ingresados por el usuario
    const edad = document.getElementById('edad').value;

    if (nuevoNombre.trim() !== '') { // Verifica si se ingresó un nombre válido
        fetch('http://localhost:3000/alumnos/add', {
            method: 'POST', // Realiza una solicitud POST para agregar un nuevo alumno
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nuevoNombre: nuevoNombre, edad: edad }) // Envía los datos en formato JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Alumno agregado:', data);
            cargarAlumnos(); // Recarga la tabla con los nuevos datos
            document.getElementById('formularioAgregar').reset(); // Limpia el formulario después de agregar el alumno
        })
        .catch(error => console.error('Error al agregar alumno:', error));
    } else {
        alert('Por favor, ingrese un nombre para el alumno.'); // Muestra una alerta si no se ingresó un nombre válido
    }
});
