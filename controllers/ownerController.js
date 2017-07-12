var mongoose = require('mongoose');
var Owner = require('../models/owner');

//POSTNEW
exports.addNew = function(req, res){
   console.log('NEW OWNER');
   var owner = new Owner({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      mascotas: req.body.mascotas//guarda con mascota null
   });
   res.send(req.body.mascotas);
   /*
   owner.save(function(err){
      if(err){
         console.log('error al guardar: ', err);
      }else { 
         console.log('todo ok');
         res.status(200).jsonp(owner);
      }
   });*/
}