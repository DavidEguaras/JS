const express = require('express');
const rutasCiudades = express.Router();
const ciudadesController = require('../controllers/ciudadesController.js')

//CONFIGURACION DE CONEXION A LA BASE DE DATOS
// const db = require('../databases/db'); //no necesita .js


rutasCiudades.get('/',ciudadesController.getCiudades);

rutasCiudades.post('/add', ciudadesController.crearCiudad);

rutasCiudades.get('/:id', ciudadesController.getCiudadById);

rutasCiudades.put('/put/:id', ciudadesController.putCiudad);
rutasCiudades.patch('/patch/:id', ciudadesController.patchCiudad);
rutasCiudades.patch('/:id', ciudadesController.actualizarCiudad);






module.exports = rutasCiudades;
