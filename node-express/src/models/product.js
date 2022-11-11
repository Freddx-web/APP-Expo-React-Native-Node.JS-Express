// Conexion
const conexion = require("../config/connectMysql");

// Exportacion de las funciones Modelos de la Tabla
module.exports = {

    // Funcion para Insertar los datos
    insertar(nombre, precio) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into productos
            (nombre, precio)
            values
            (?, ?)`,
                [nombre, precio], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
    // Funcion para obtener los datos
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombre, precio from productos`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    // Funcion para indentificar los datos
    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombre, precio from productos where id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    // Funcion para actualizar los datos
    actualizar(id, nombre, precio) {
        return new Promise((resolve, reject) => {
            conexion.query(`update productos
            set nombre = ?,
            precio = ?
            where id = ?`,
                [nombre, precio, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
    // Funcion para eliminar los datos
    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from productos
            where id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}