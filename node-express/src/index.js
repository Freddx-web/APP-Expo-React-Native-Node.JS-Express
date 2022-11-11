const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

//Mongoose Connect

//mongoose
//    .connect(process.env.MONGODB_URI)
//    .then(() => console.log("CONNECTED to MongoDB Atlas"))
//    .catch((error) => console.error(error));
//Iniciando el servidor

app.listen(app.get('port'),() => {
    console.log(`URL: http://localhost:${app.get('port')}`);
});
 