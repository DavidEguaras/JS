const express = require('express'); // npm -i express
const cors = require('cors'); // npm install -y cors
const app = express();
//const mysql = require('mysql');
const rutasCiudades = require('./rutas/rutas_ciudades');
const puerto = 3000;
const multer = require('multer'); // Agregar Multer // npm -y install multer
// const fs = require('fs');

app.use(cors());
// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Middleware para manejar datos codificados en formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directorio donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Nombre original del archivo
    }
});
const upload = multer({ storage: storage });
// Middleware Multer para manejar archivos
app.use(upload.any());


app.use('/ciudades', rutasCiudades);

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

