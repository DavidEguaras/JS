const express = require('express');
const rutasCiudades = express.Router();
const ciudadesController = require('../controllers/ciudadesController.js')

//CONFIGURACION DE CONEXION A LA BASE DE DATOS
// const db = require('../databases/db'); //no necesita .js
rutasCiudades.get('/add', ciudadesController.getCiudades);


module.exports = rutasCiudades;
