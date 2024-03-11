const db = require('../databases/db.js');

const getAlumnos = (req, res) => {   // http://localhost:3000/alumnos
    // Consulta a la base de datos
    db.query('SELECT * FROM alumnos', (err, resultados) => {
        if(err) {
            console.error('Error al obtener datos desde la base de datos:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(resultados);
        }
    });
};

const crearAlumno = (req, res) => {
    const { nuevoNombre, edad } = req.body;
    console.log(req.body); // Agrega esta línea para verificar los datos recibidos desde el formulario
    // Insertar datos en la base de datos
    db.query('INSERT INTO alumnos (nombre, edad) VALUES (?, ?)',
        [nuevoNombre, edad], (err, resultado) => {
            if (err) {
                console.error('Error al guardar datos en la base de datos:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json({ recibido: true, nuevoNombre, edad, id: resultado.insertId });
            }
        }
    );
};


const getAlumnoById = (req, res) => { // http://localhost:3000/alumnos/registro/3
    const idRegistro = req.params.id;
 
    // Consulta a la base de datos para obtener el registro por ID
    db.query('SELECT * FROM alumnos WHERE id = ?', [idRegistro], (err, resultados) => {
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

const putAlumno = (req, res) => { // http://localhost:3000/alumnos/put/2
    const idRegistro = req.params.id;
    const { nuevoNombre, edad } = req.body;

    const sql = 'UPDATE alumnos SET nombre = ?, edad = ? WHERE id = ?';

    db.query(sql, [nuevoNombre, edad, idRegistro], (err, resultados) => {
        if(err) {
            console.error('Error al insertar datos', err);
        } else {
            res.json({ recibido: true, nuevoNombre, edad, id: idRegistro });
        }
    })
}

const patchAlumno = (req, res) => { // http://localhost:3000/alumnos/patch/2
    const idRegistro = req.params.id;
    const { nuevoNombre, edad } = req.body;

    const sql = 'UPDATE alumnos SET nombre = ?, edad = ? WHERE id = ?';

    db.query(sql, [nuevoNombre, edad, idRegistro], (err, resultados) => {
        if(err) {
            console.error('Error al insertar datos', err);
        } else {
            res.json({ recibido: true, nuevoNombre, edad, id: idRegistro });
        }
    })
}

const updateAlumno = (req, res) => { // http://localhost:3000/alumnos/
    const idRegistro = req.params.id;
    const { nuevoNombre, edad } = req.body;
    const updatedFields = [];
    const updatedValues = [];

    if (nuevoNombre != undefined) {
        updatedValues.push(nuevoNombre);
        updatedFields.push('nombre = ?');
    }

    if (edad != undefined) {
        updatedValues.push(edad);
        updatedFields.push('edad = ?');
    }

    const sql = `UPDATE alumnos SET ${updatedFields.join(', ')} WHERE id = ?`;

    const queryValues = [...updatedValues, idRegistro];

    db.query(sql, queryValues, (err, resultados) => {
        if(err) {
            console.error('Error al insertar datos', err);
        } else {
            res.json({ recibido: true, nuevoNombre, edad, id: idRegistro });
        }
    })
}

const deleteAlumno = (req, res) => { // http://localhost:3000/alumnos/registro/3
    const idRegistro = req.params.id;

    db.query('DELETE FROM alumnos WHERE ID = ?', [idRegistro], (err, resultados)=>{
        if(err){
            console.error("Error al eliminar de la base de datos", err);
            res.status(500).json({error: 'Error interno del servidor'});
        } else {
            // Verificar si se eliminó algo
            if(resultados.affectedRows > 0){
                res.json({mensaje: `Registro con id ${idRegistro} se eliminó correctamente`});
            } else {
                res.status(404).json({error: `Registro con id ${idRegistro} no encontrado`})
            }
        }
    });
};

module.exports = {
    getAlumnos,
    crearAlumno,
    getAlumnoById,
    putAlumno,
    patchAlumno,
    updateAlumno,
    deleteAlumno
};
