var mongoose = require('mongoose');
var schema = mongoose.Schema;

var petSchema = new schema({
   name: String,
   raza: String,
   edad: Number
})

module.exports = mongoose.model('Pet', petSchema);