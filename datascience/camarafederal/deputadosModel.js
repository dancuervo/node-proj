const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
    // define Schema
const camaraFederalSchema = Schema({
    fecha: new Date(),
    legislatura: Number,
    lista: Array,
    partidos: Array,
    pesoPartidos: Array
});
  // compile schema to model

module.exports = mongoose.model('CamaraFederal', camaraFederalSchema, 'panoptico');

