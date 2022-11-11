// Express
const express = require('express');
const { connect } = require('mongoose');
// Enrutador
const router = express.Router();

/* Ogtener pag principal  - GET index page. */
router.get('/', async function(req, res, next) {
  return res.status(202).json({ 
    page: "page Auth!",
  	message: "message Auth!",
  	token: "",
  	"active": true,
  });
});

//---------------------------------------------------//
//               ROUTER - POST                       //
//---------------------------------------------------//
/**
 * NOTA: Crear un POST para el "Sig in" y "Login" que registra los nuevos Usuarios
 * Tmabien Almacenar, Encriptar, Procesar los datos de usuarios,
 *   - Crear TOKEN ACESS
 *   - Temporizadores de Recuperacion de cuenta Usuarios
 *   - Enviar Email de comfirmacion de usuarios q perdieron sus cuentasd 
 */


/** Sign In */
router.post('/sign_in', async function(req, res, next){
	const {nombre, email, password} = request.body;
	// validar Campos
    if (!nombre || !email || !password) {
        return res.status(404).send("No hay nombre o email");
    } else {
		connection.query("INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?) ", 
        [nombre, email, password],
        (error, results) => {
            if(error)
            throw error;
		    return res.status(202).json({ message: "POST - Send"})
        });
	}
})

/** lOGIN */
router.post('/login', async function(req, res, next){
	
    const { nombre} = req.body;
	// validar Campos
    
    if (!nombre ) {
        res.status(404).send("Complete todo los campos");
    } 
    

   
})

// Exportar Modulo Router
module.exports = router;
