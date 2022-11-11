// Express
const express = require('express');
// Enrutador
const router = express.Router();
// Connect Mysql
const con = require('../config/connectMysql.js')

/* Ogtener pag principal  - GET Login. */
router.get('/', function(req, res, next) {
  return res.status(200).json({ message: "Page - Auth!" });
});

router.get('/users', async function(req, res, next) {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
      console.log(result);
      return res.json(result[email]);
    });
  });
});

//get employee by id
router.get('/users/:id', (req, res, next) => {
    connection.query('select * from users where id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

/* Ogtener pag principal  - GET index page. */
/*
router.get('/users', function(req, res, next) {
  return res.json({ message: "page Users!" });
});
*/

// Exportar Modulo Router
module.exports = router;
