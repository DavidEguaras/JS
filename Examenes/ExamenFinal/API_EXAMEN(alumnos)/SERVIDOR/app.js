const express = require('express');
const cors = require('cors');
const app = express();
const rutasAlumnos = require('./rutas/rutas_alumnos'); // Cambio de rutas_ciudades a rutas_alumnos
const puerto = 3000;
const multer = require('multer');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
app.use(upload.any());

// Cambio de '/ciudades' a '/alumnos' para las rutas
app.use('/alumnos', rutasAlumnos);

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
