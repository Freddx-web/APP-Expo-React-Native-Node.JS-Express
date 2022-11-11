

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";




/*
// MongoDB
const { MongoClient } = require('mongodb');
// Nombre de bd
const dbName = 'data_base1';
// Conexión URL (estas corriendo en local :D)
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, {
  useUnifiedTopology: true
});

module.exports = async () => {

  try {

     // Conectamos al servidor
     await client.connect();
     console.log('CONNECTED MongoDB')
     // retornamos la conexión con el nombre de la bd a usar
     return client.db(dbName); 

  } catch (e) {
    console.error(e);

  }

};

*/
