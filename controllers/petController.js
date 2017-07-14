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
      if(err) console.log('error al guardar mascota');
      res.status(200).jsonp(pet);
   })
}


//GETALL
exports.getAll = function(req, res){
   console.log('GET ALL PETS');
   Pet.find(function(err, pets){
      if(err){
         res.send(500, err.message);
         console.log('Error al traer todas las mascotas');
      }else {
         res.status(200).jsonp(pets);
      }
   })
}

//GET BY ID
exports.getById = function(req, res){
   console.log('GET PET BY ID');
   Pet.findById(req.params.id, function(err, pet){
      if(err){
         res.send(500, err.message);
         console.log('Error al traer la mascota por id');
      }else{
         res.status(200).jsonp(pet);
      }
   })
}

//PUT OLD
exports.update = function(req, res){
   console.log('UPDATE A PET');
   Pet.findById(req.params.id, function(err, pet){
      if(err){
         res.send(500, err.message);
         console.log('Error al traer la mascota por id');
      }else{
         pet.name = req.body.name;
         pet.raza = req.body.raza;
         pet.edad = req.body.edad;
         pet.save(function(err, pet){
            if(err) console.log('error al actualizar mascota');
            res.status(200).jsonp(pet);
         })
      }
   })
}

//DELETE A PET
exports.delete = function(req, res){
   Pet.findById(req.params.id, function(err, pet){
      pet.remove(function(err){
         if(err){
            res.send(500, err.message);
            console.log('error al borrar mascota');
         }else{
            res.json({ message: 'Borrada la mascota!'});
         }
      })
   })
}