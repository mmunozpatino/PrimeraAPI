var mongoose = require('mongoose');
var Pet = require('../models/pet');

//POSTNEW
exports.addNew = function(req, res){
   console.log('NEW PET');
   var pet = new Pet({
      name: req.body.name,
      raza: req.body.raza,
      edad: req.body.edad
   });
   pet.save(function(err, pet){
      if(err) console.log('error al guardar');
      res.status(200).jsonp(pet);
   })
}
