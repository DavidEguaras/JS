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


const getCiudadById = (req, res) => { //http://localhost:3000/ciudades/registro/3
    const idRegistro = req.params.id;
 
    // Consulta a la base de datos para obtener el registro por ID
    db.query('SELECT * FROM ciudades WHERE id = ?', [idRegistro], (err, resultados) => {
      if (err) {
        console.error('Error al obtener el registro desde la base de datos:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        // Verifica si se encontró un registro
        if (resultados.length > 0) {
          res.json(resultados[0]); // Devuelve el primer resultado encontrado (debería ser único)
        } else {
          res.status(404).json({ error: 'Registro no encontrado' });
        }
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



const putCiudad = (req, res) => {
    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const sql = 'UPDATE ciudades SET nombre = ?, cantidad=?, WHERE id = ?';

    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultado) =>{
        if(err){
            console.error('Error al insertar datos', err);
        }else{
            res.json({recibido: true,  nuevoNombre, habitantes, id: resultado.insertId})
        }
    });
}

const patchCiudad = (req, res) => {
    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const sql = 'UPDATE ciudades SET nombre = ?, cantidad=?, WHERE id = ?';

    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultado) =>{
        if(err){
            console.error('Error al insertar datos', err);
        }else{
            res.json({recibido: true,  nuevoNombre, habitantes, id: resultado.insertId})
        }
    });
}

const actualizarCiudad = (req, res)=>{ //http://localhost:3000/ciudades/patch/3
    const idRegistro= req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const updatedFields = [];
    const updatedValues = [];

    if(nuevoNombre != undefined){
        updatedFields.push(nuevoNombre);
        updatedValues.push('nombre=?');
    }

    if(habitantes != undefined){
        updatedFields.push(habitantes);
        updatedValues.push('cantidad = ?');
    }
    
    const sql=`UPDATE ciudades SET ${updatedFields.join(',')} WHERE id= ?`;
    const queryValues = [...updatedValues, idRegistro];

    db.query(sql, queryValues, (err, resultado)=>{
      if(err){
        console.error('Error al insertar datos', err);
      } else {
        res.json({recibido: true, nuevoNombre, habitantes, id: resultado.idRegistro});
      }
    })
  }



module.exports = {
    actualizarCiudad,
    patchCiudad,
    putCiudad,
    getCiudadById,
    getCiudades,
    crearCiudad,
};