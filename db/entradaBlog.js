const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
    // define Schema
const BlogSchema = Schema({
    autor: String,
    fecha: Date,
    post: String,
    tags: String
});
  // compile schema to model

module.exports = mongoose.model('articulo', BlogSchema, 'blog');
  