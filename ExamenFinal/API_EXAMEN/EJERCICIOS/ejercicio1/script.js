document.addEventListener("DOMContentLoaded", function() {
    // Obtener la tabla y el cuerpo de la tabla
    const table = document.getElementById('ciudades-table').getElementsByTagName('tbody')[0];

    // Función para cargar los datos de las ciudades
    function cargarCiudades() {
        fetch('http://localhost:3000/ciudades')
            .then(response => response.json())
            .then(data => {
                // Limpiar la tabla antes de volver a cargar los datos
                table.innerHTML = '';

                // Iterar sobre los datos y agregar cada ciudad a la tabla
                data.forEach(ciudad => {
                    const row = table.insertRow();
                    row.innerHTML = `
                        <td>${ciudad.id}</td>
                        <td>${ciudad.nombre}</td>
                        <td>${ciudad.cantidad}</td>
                        <td><button class="eliminar-btn" data-id="${ciudad.id}">Eliminar</button></td>
                    `;
                });

                // Agregar event listener a los botones de eliminar
                const botonesEliminar = document.getElementsByClassName('eliminar-btn');
                Array.from(botonesEliminar).forEach(boton => {
                    boton.addEventListener('click', function() {
                        const idCiudad = this.getAttribute('data-id');
                        eliminarCiudad(idCiudad);
                    });
                });
            })
            .catch(error => console.error('Error al cargar las ciudades:', error));
    }

    // Función para eliminar una ciudad
    function eliminarCiudad(idCiudad) {
        fetch(`http://localhost:3000/ciudades/${idCiudad}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Recargar los datos de las ciudades después de eliminar
                cargarCiudades();
            } else {
                console.error('Error al eliminar la ciudad');
            }
        })
        .catch(error => console.error('Error al eliminar la ciudad:', error));
    }

    // Cargar las ciudades al cargar la página
    cargarCiudades();
});
