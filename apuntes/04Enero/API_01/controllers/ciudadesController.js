const db = require('../databases/db.js');

const getCiudades = (req, res) => {
    db.query('SELECT * FROM ciudades', (err, resultados)  => {
        if(err){
            console.error('Error al obtener datos desde la base de datos: ', err);
            res.status(500).json({error:'Error interno del servidor'});
        }else{
            res.json(resultados);
        }
    });
};

const crearCiudad = (req, res) => {
    const {nuevoNombre, habitantes} = req.body;
    //insertar datos en la base de datos
    db.query('INSERT INTO ciudades (nombre, cantidad) VALUES (?, ?)',
    [nuevoNombre, habitantes], (err, resultado) =>{
        if(err){
            console.error('Error al guardar datos en la base de datos:', err);
            res.status(500).json({error: 'Error interno del servidor' });
        }else{
            res.json({recibido: true, nuevoNombre, habitantes, id: resultado.insertId})
        }
    });
};

module.exports = {
    getCiudades,
    crearCiudad,
};