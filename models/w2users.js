// for mongoose schemas and models
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    // "username": String,
    "username": {
        type: String,
        required: true,
        unique: true
    },
    "password": String,
    "type": String,
});

const usersModel = mongoose.model('w2user', usersSchema)

module.exports = usersModel;