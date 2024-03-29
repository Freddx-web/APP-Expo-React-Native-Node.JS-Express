// Mongoose
const mongoose = require('mongoose');
// Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.mongoose.model('User', userSchema);