var mongoose = require('mongoose');
var schema = mongoose.Schema;
var petSchema = require('./pet');

var OwnerSchema = new schema({
   nombre: { type: String},
   apellido: { type: String},
   dni: { type: Number},
   mascotas: [petSchema]
})
module.exports = mongoose.model('Owner', OwnerSchema);