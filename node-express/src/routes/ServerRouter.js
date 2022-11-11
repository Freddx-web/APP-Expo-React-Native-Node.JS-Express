// Express
const express = require('express');
// Enrutador
const router = express.Router();
//MySQL
var mysql = require('mysql');
// Models
const usuariosModel = require("../models/users.js");
//---------------------------------------------------//
//               Connect DB                          //
//---------------------------------------------------//
// Connect DB
const { con } = require('../config/connectMysql');
// Db Mongo
//const {connect} = require('../config/mongo.insert.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/data_base1";
 
// Connect to Mongo
const connect =  MongoClient.connect(url, function(err, db, next) {
  try {
      if (err) throw err;
          console.log("CONNECTED MongoDB SERVER. Successfully");
          db.close();
      } catch (e) {
          console.error(e);
  }
});

//---------------------------------------------------//
//               ROUTER - POST                       //
//---------------------------------------------------//

router.post('/post', async function(req, res, next){
    //Param
    const { nombre, email, password } = req.body;
    //Condition
    if (!nombre || !email || !password) {
      return res.status(404).json({ 
        error: "404 :",
        alert: "Mesaje no Enviado"
      });
    } else {
      
      // Se asignar el modelo(usuariosModel)
      usuariosModel
        .insertar(nombre, email, password)
        .then(idusuarioInsertado => {


           res.status(202).json({ 
            title: "Inciar Session",
            message: "Datos Enviado",
            auth: {
              page: "POST - serverRouter",
              
            },
            user: { 
              nombre : nombre,
              email : email,
              password: password
            }
          })

        })
        .catch(err => {
          return res.status(500).send("Error insertando usuario");
        });
        
      /*
      //Resutl
      await res.status(202).json({ 
        title: "Inciar Session",
        message: "Datos Enviado",
        auth: {
          page: "POST - serverRouter",
          
        },
        user: { 
          nombre : nombre,
          email : email,
          password: password
        }
      })
      */
    };
  }
)


//---------------------------------------------------//
//               ROUTER - GET                        //
//---------------------------------------------------//
/* Ogtener pag principal  - GET index page. */
router.get('/', async function(req, res, next) {
  return res.status(202).json({
    page: "Server PAGE",
    message: "list Server",
    module : {
        num1: "round1",
        class: "round2"
      }
    }
  );
});

/* Ogtener pag principal  - GET index page. */
router.get('/mysql', async function(req, res, next) {
  await con.connect(function(err) {
  if (err) { throw err };
    con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) { throw err };
      console.log(result);
      return res.status(200).json({ 
        page: "auth / sql" ,
        message: "Page - Authhh!", 
        result 
      });
      //db.close();
    });
  });
});

// Ogtener Consulta MongoDB JSON
router.get('/mongodb', async function(req, res, next){
  await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("data_app");
    dbo.collection("users").find({}).toArray(function(err, result) {
      //if (err) throw err;
      //console.log(result);
      return res.status(200).json({ 
        result
      });
      //db.close();
    });
  });
});

// Exportar Modulo Router
module.exports = router;
