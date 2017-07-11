var mongoose = require('mongoose');
var schema = mongoose.Schema;

var petSchema = new schema({
   name: { type: String},
   raza: { type: String},
   edad: { type: Number}
})

module.exports = mongoose.model('Pet', petSchema);