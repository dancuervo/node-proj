const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
    // define Schema
const UserSchema = Schema({
    name: String,
    login: String,
    email: Date,
    password: String
});
  // compile schema to model

module.exports = mongoose.model('User', UserSchema, 'users');