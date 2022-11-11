// Importamos paquete
const bcrypt = require("bcryptjs");
// Este hash debe venir de tu base de datos, por ejemplo
// Nota: yo sé que este hash es "hunter2", obviamente es para ejemplificar
const palabraSecretaHasheada = "$2a$10$P9yvh9ew5ZueNRjQGX4Eiui9jNhaKJCX24mRsrWSNvj.0O2FjNSB2";
const palabraSecretaProporcionadaPorUsuario = "hunter2";
// Recuerda. Los argumentos son: texto plano, encriptada, y callback
bcrypt.compare(palabraSecretaProporcionadaPorUsuario, palabraSecretaHasheada, (err, coinciden) => {
	if (err) {
		console.log("Error comprobando:", err);
	} else {
		console.log("¿La contraseña coincide?: " + coinciden);
	}
});