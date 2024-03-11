const mysql = require('mysql');

// Configuracion de la conexion a la base de datos
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306, 
    user: 'david', //ejemplouser ?
    password: 'david', //123456 
    database: 'ejemplodb' //ejemplodb
});

// Conexion a la base de datos
db.connect((err) => {
    if(err) {
        console.error('Error de conexion a la base de datos:', err);
    } else {
        console.log('Conexion exitosa a la base de datos');
    }
});

module.exports = db;