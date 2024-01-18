const mysql = require('mysql');

const db = mysql.createConnection({
    host: '0.0.0.0',
    port: 3366,
    user: 'david',
    password: 'david',
    database: 'ejemplodb'
})

//conexion a la base de datos
db.connect((err) =>{
    if(err){
        console.error('Error de conexion a la base de datos', err);
    }else{
        console.log('Conexion Exitosa a la base de datos');
    }
})

module.exports = db;