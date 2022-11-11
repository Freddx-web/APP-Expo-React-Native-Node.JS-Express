

//dotenv nos permite leer las variables de entorno de nuestro .env
const dotenv = require("dotenv");
dotenv.config();

const mysql = require('mysql');
let con;

try {
    con = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME
    });
    console.log("MySql SERVER EXITOSAMENTE");
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = {con};

