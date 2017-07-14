var mongoose = require('mongoose');
var Owner = require('../models/owner');
var Pet = require('../models/pet');

//POSTNEW
exports.addNew = function(req, res){
   console.log('NEW OWNER');
   var owner = new Owner({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni
   });
   
   owner.save(function(err){
      if(err){
         console.log('error al guardar: ', err);
      }else { 
         console.log('todo ok');
         res.status(200).jsonp(owner);
      }
   });
}

//GET ALL
exports.getAll = function(req, res){
   console.log('GET ALL OWNERS');
   Owner.find(function(err, owners){
      if(err){
         console.log('error al traer a todos los dueños');
         res.send(500, err.message);
      }else{
         res.status(200).jsonp(owners);
      }
   })
}

//ADD PET
exports.addPet = function(req,res){
   console.log('ADD PET TO OWNER');
   Owner.findOne({_id: req.params.id}, function(err, owner){
      var pet = new Pet({
         name : req.body.name,
         raza: req.body.raza,
         edad: req.body.edad
      })
      owner.mascotas.push(pet);
      owner.save(function(err, owner){
         if(err){
            console.log('Error al guardar con mascota');
            res.status(500, err.message);
         }else{
            res.status(200).jsonp(owner);
         }
      })
   })
}