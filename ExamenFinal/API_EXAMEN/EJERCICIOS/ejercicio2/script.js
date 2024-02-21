document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const tableBody = document.getElementById("ciudades-body");

    // Función para cargar ciudades que coincidan con la búsqueda
    function buscarCiudades() {
        const searchText = searchInput.value.trim(); // Eliminar espacios en blanco al inicio y al final
        const regex = new RegExp('^' + searchText, 'i'); // Expresión regular que busca el texto al principio, sin distinguir entre mayúsculas y minúsculas
        fetch('http://localhost:3000/ciudades')
            .then(response => response.json())
            .then(data => {
                // Filtrar las ciudades que coincidan con la búsqueda
                const ciudadesFiltradas = data.filter(ciudad => regex.test(ciudad.nombre));
                
                // Limpiar el cuerpo de la tabla antes de agregar nuevos datos
                tableBody.innerHTML = "";

                if (ciudadesFiltradas.length === 0) {
                    tableBody.innerHTML = "<tr><td colspan='3'>No se encontraron ciudades</td></tr>";
                } else {
                    ciudadesFiltradas.forEach(ciudad => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${ciudad.id}</td>
                            <td>${ciudad.nombre}</td>
                            <td>${formatoHabitantes(ciudad.cantidad)}</td>
                        `;
                        tableBody.appendChild(row);
                    });
                }
            })
            .catch(error => console.error("Error al buscar ciudades:", error));
    }

    // Función para dar formato adecuado a la cantidad de habitantes
    function formatoHabitantes(cantidad) {
        return new Intl.NumberFormat('es-ES').format(cantidad);
    }

    // Event listener para el botón de búsqueda
    searchButton.addEventListener("click", buscarCiudades);
});
