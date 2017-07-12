var mongoose = require('mongoose');
var schema = mongoose.Schema;
//var petSchema = require('./pet');


var petSchema = new schema({
   name: String,
   raza: String,
   edad: Number
})

var OwnerSchema = new schema({
   nombre: String,
   apellido: String,
   dni: Number,
   mascotas: [petSchema]
})

module.exports = mongoose.model('Owner', OwnerSchema);