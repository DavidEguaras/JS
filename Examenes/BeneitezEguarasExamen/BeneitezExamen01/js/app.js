
document.addEventListener("DOMContentLoaded", function() {
    const ciudadesTable = document.getElementById("ciudadesTable");
    const arrayOriginalTd = document.getElementById("arrayOriginal");
    const arrayModificado = document.getElementById("arrayModificado");
    const ciudades=[
        'Zaragoza', 'Barcelona',
        'Bilbao', 'Granada',
        'Madrid', 'Alicante',
        'Málaga', 'Valencia',
        'Sevilla', 'Murcia'
    ]
   
    arrayOriginalTd.innerText = ciudades;
    arrayCiudades = Array.from(ciudades)
    arrayModificado.innerText = ordena(arrayCiudades);

    function ordena(array){
        array.sort();
    }
    
    const row = document.createElement("tr");
        row.innerHTML

    function desordena(array) {
        const row = document.createElement("tr");
        
    }
    const desordenaIntervalo=setTimeout(desordena(ciudades), 2500);
    

   
});
