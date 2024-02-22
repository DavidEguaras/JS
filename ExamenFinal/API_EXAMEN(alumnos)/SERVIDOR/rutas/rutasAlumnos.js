const express = require('express');
const rutasAlumnos = express.Router(); // Cambio de rutasCiudades a rutasAlumnos
const alumnosController = require('../controllers/alumnosController'); // Cambio de ciudadesController a alumnosController

// Ruta para obtener todos los alumnos
rutasAlumnos.get('/', alumnosController.getAlumnos);

// Ruta para agregar un nuevo alumno
rutasAlumnos.post('/add', alumnosController.crearAlumno);

// Ruta para obtener un alumno por su ID
rutasAlumnos.get('/:id', alumnosController.getAlumnoById);

// Ruta para actualizar un alumno existente usando PUT
rutasAlumnos.put('/put/:id', alumnosController.putAlumno);

// Ruta para actualizar un alumno existente usando PATCH
rutasAlumnos.patch('/patch/:id', alumnosController.patchAlumno);

// Ruta para actualizar un alumno existente utilizando todos los campos
rutasAlumnos.patch('/:id', alumnosController.updateAlumno);

// Ruta para eliminar un alumno
rutasAlumnos.delete('/:id', alumnosController.deleteAlumno);

// Ruta para obtener los alumnos por un rango de edad
rutasAlumnos.get('/edades/:min/:max', alumnosController.getAlumnosByEdad);

// Exportar las rutas de los alumnos
module.exports = rutasAlumnos;
