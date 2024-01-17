const express = require('express'); //npm -i express
const rutasCiudades = require('./rutas/rutas_ciudades.js');
const app = express();
const puerto = 3000;


app.use(express.json());

app.use('/ciudades', rutasCiudades);

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
})
