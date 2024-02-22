const db = require('../databases/db'); //no necesita .js

const getCiudades = (req,res) => {   // http://localhost:3000/ciudades
    //Consulta a la base de datos
    db.query('SELECT * FROM ciudades', (err, resultados) => {
        if(err) {
            console.error('Error al obtener datos desde la base de datos:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(resultados);
        }
    });
};

const crearCiudad = (req,res)=>{
    const { nuevoNombre, habitantes } = req.body;
    console.log(req.body); // Agrega esta línea para verificar los datos recibidos desde el formulario
    //Insertas datos en la base de datos
    db.query('INSERT INTO ciudades (nombre, cantidad) VALUES (?, ?)',
        [nuevoNombre, habitantes], (err, resultado) => {
            if (err) {
                console.error('Error al guardar datos en la base de datos:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json({ recibido: true, nuevoNombre, habitantes, id: resultado.insertID})
            }
        }
    );
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

const putCiudad = (req,res) => { //http://localhost:3000/ciudades/put/2
    const idRegistro = req.params.id;
    const { nuevoNombre, habitantes } = req.body;

    const sql = 'UPDATE ciudades SET nombre = ?, cantidad = ? WHERE id = ?';

    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultados) => {
        if(err) {
            console.error('Error al insertar datos', err);
        } else {
            res.json({recibido: true, nuevoNombre, habitantes, id: resultados.idRegistro});
        }
    })
}

const patchCiudad = (req,res) => { //http://localhost:3000/ciudades/patch/2
    const idRegistro = req.params.id;
    const { nuevoNombre, habitantes } = req.body;

    const sql = 'UPDATE ciudades SET nombre = ?, cantidad = ? WHERE id = ?';

    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultados) => {
        if(err) {
            console.error('Error al insertar datos', err);
        } else {
            res.json({recibido: true, nuevoNombre, habitantes, id: resultados.idRegistro});
        }
    })
}

const updateCiudad = (req,res) => { //http://localhost:3000/ciudades/
    const idRegistro = req.params.id;
    const { nuevoNombre, habitantes } = req.body;
    const updatedFields = [];
    const updatedValues = [];

    if (nuevoNombre != undefined) {
        updatedValues.push(nuevoNombre);
        updatedFields.push('nombre = ?');
    }

    if (habitantes != undefined) {
        updatedValues.push(habitantes);
        updatedFields.push('cantidad = ?');
    }

    const sql = `UPDATE ciudades SET ${updatedFields.join(', ')} WHERE id = ?`;

    const queryValues = [...updatedValues, idRegistro];

    db.query(sql, queryValues, (err, resultados) => {
        if(err) {
            console.error('Error al insertar datos', err);
        } else {
            res.json({recibido: true, nuevoNombre, habitantes, id: resultados.idRegistro});
        }
    })
}

const deleteCiudad = (req, res) => { //http://localhost:3000/ciudades/registro/3
    const idRegistro = req.params.id;

    db.query('DELETE FROM ciudades WHERE ID = ?', [idRegistro], (err, resultados)=>{
        if(err){
            console.error("Error al eliminar de la base de datos", err);
            res.status(500).json({error: 'Error interno del servidor'});
        } else {
            //verificar si se elimina algo
            if(resultados.affectedRows > 0){
                res.json({mensaje: `Registro con id ${idRegistro} se eliminó correctamente`});
            } else {
                res.status(404).json({error: `Registro con id ${idRegistro} no encontrado`})
            }
        }
    });
 
};

const getCiudadesByHabitantes = (req, res) => {
    try {
      // Obtén los valores mínimos y máximos del rango desde los parámetros de consulta
      const minHabitantes = parseInt(req.params.min, 10) || 0; // Valor mínimo, por defecto 0
      const maxHabitantes = parseInt(req.params.max, 10) || Number.MAX_SAFE_INTEGER; // Valor máximo, por defecto infinito
 
      console.log(minHabitantes);
      console.log(maxHabitantes);
 
      // Ejecuta la consulta SQL para obtener ciudades en el rango especificado
      db.query('SELECT * FROM ciudades WHERE cantidad BETWEEN ? AND ?', [minHabitantes, maxHabitantes], (err, resultados) => {
        if (err) {
          console.error("Error en la consulta:", err);
          res.status(500).json({ error: 'Error interno del Servidor' });
        } else {
          // Verificamos si se encontró algo
          if (resultados.length > 0) {
            res.json({ ciudades: resultados });
          } else {
            res.status(404).json({ error: `No se encontraron ciudades con esos requisitos` });
          }
        }
      });
    } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({ error: 'Error interno del Servidor' });
    }
};
/*
const getCiudadByHabitantes = (req, res) => {
    console.log(" - SELECT por habitantes");
    const minHabitantes = req.params.min;
    const maxHabitantes = req.params.max;
    // console.log(minHabitantes, maxHabitantes);
    db.query('SELECT * FROM ciudades WHERE cantidad > ? AND cantidad < ?', [minHabitantes,maxHabitantes], (err, resultado) => {
        if (err) {
            console.error('Error al obtener datos desde la base de datos', err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {            
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ error: 'Registro no encontrado' })
            }
        }
    });
};
*/

module.exports = {
    getCiudades,
    crearCiudad,
    getCiudadById,
    putCiudad,
    patchCiudad,
    updateCiudad,
    deleteCiudad,
    getCiudadesByHabitantes
};