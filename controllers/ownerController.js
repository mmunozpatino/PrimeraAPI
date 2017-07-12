var mongoose = require('mongoose');
var Owner = require('../models/owner');

//POSTNEW
exports.addNew = function(req, res){
   console.log('NEW OWNER');
   var owner = new Owner({
      nombre: req.body.name,
      apellido: req.body.apellido,
      dni: req.body.dni,
      mascotas: req.body.mascotas
   });
   /*
   res.send(req.body);
   owner.save(function(err, owner){
      if(err){
         console.log('error al guardar: ', err);
         res.status(500);
      } 
      res.status(200).jsonp(owner);
   })*/
   /*
   var owner = new Owner({
      nombre: 'Mercedes',
      apellido: 'muñoz',
      dni: 2222
   });*/
   owner.save(function(err){
      if(err){
         console.log('error al guardar: ', err);
      }else { 
         console.log('todo ok');
         res.status(200).jsonp(owner);
      }
   });
}