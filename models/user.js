const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
    // define Schema
    //toda la información es actualizable menos el token que debe representar un id único -> id de documento mongodb
const UserSchema = Schema({
    name: String,
    login: String,
    email: String,
    registered: Date,
    token: String,
    avatar: String,
    password: String
});
  // compile schema to model

//module.exports = mongoose.model('User', UserSchema, 'users');