// Express
const express = require('express');
// Enrutador
const router = express.Router();

/* Ogtener pag principal  - GET index page. */
router.get('/', function(req, res, next) {
  return res.status(202).json({ message: "page index!" });
});

// Exportar Modulo Router
module.exports = router;
