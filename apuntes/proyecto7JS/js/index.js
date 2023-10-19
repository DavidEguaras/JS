// let alumno = new Object();
// alumno.nombre = 'Carlos';
// alumno.edad = 19;


// let alumno = {
//     nombre: 'Carlos', 
//     apellidos: 'Perez Ortiz',
//     edad: 19
// };

//EJERCICIO: Crea un objeto llamado tvSamsung con las propiedades nombre (“TV Samsung 42”),
//categoría (“Televisores”), unidades (4), precio (345.95) y con un método llamado importe 
//que devuelve el valor total de las unidades (nº de unidades * precio). 


let tvSamsung = {
    nombre: 'TV SAMSUNG 42',
    categoria: 'Televisores',
    unidades: 4,
    precio: 345.95,
    importe: function(){
        return this.precio * this.unidades;
    }
}


console.log( tvSamsung.nombre + " Importe: "+tvSamsung.importe());