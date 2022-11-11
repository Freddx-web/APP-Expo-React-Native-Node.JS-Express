const express = require('express');
const userSchema = require("../models/userSchema.js");
const router = express.Router();
 
// Create user
router.post('/users', (rep , res, next) =>{
	const user = userSchema(req.body);
	user.save()
	.then((data) => res.json(data)) //Promese
	.catch((error) => res.json({ message: error })); 
})

module.exports = router;