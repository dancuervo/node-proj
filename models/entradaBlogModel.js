const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
    // define Schema
const blogSchema = Schema({
    author: String,
    date: Date,
    title: String,
    post: String,
    tags: String
});
  // compile schema to model

module.exports = mongoose.model('post', blogSchema, 'blog');
  