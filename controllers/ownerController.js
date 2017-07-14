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
      };
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
      };
   });
}

//ADD PET
exports.addPet = function(req,res){
   console.log('ADD PET TO OWNER');
   Owner.findById(req.params.id, function(err, owner){
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
         };
      });
   });
}

//DELETE PET
exports.deletePet = function(req,res){
   console.log('Borrar mascota de dueño');
   Owner.findById(req.params.ido, function(err, owner){
      if(err){
         console.log('error buscando dueño');
      }else{
         /*
         console.log(owner);
         console.log(owner.mascotas.id(req.params.idp));
         */
        owner.mascotas.id(req.params.idp).remove();
        owner.save(function(err){
         if(err){
            return handleError(err);
         }else{
            console.log('la mascota fue borrada!');
         }
        })
        res.status(200).jsonp({message: 'mascota borrada'});

      }
   })
}

//GET PETS
exports.getPets = function(req, res){
   console.log('GET PETS OF OWNER');
   Owner.findById(req.params.id, function(err, owner){
      if(err){
         res.status(500, err.message);
         console.log('error buscando owner para consultar mascotas');
      }else{
         res.status(200).jsonp(owner.mascotas);
      }
   })
} 
//UPDATE OWNER
exports.update = function(req, res){
   console.log('Update owner');
   Owner.find(req.params.id, function(err, owner){
      if(err){
         console.log('erro al actualizar dueño');
         res.status(500, err.message);
      }else{
         owner.nombre = req.body.nombre;
         owner.apellido = req.body.apellido;
         owner.dni = req.body.dni;
         owner.save(function(err, owner){
            if(err){
               console.log('error guardando actualizacion de dueño');
               res.status(500, err.message);
            }else{
               res.status(200).jsonp(owner);
            }
         });
      };
   });
}

//DELETE OWNER
exports.delete = function(req, res){
   Owner.findById(req.params.id, function(err, owner){
      owner.remove(function(err){
         if(err){
            console.log('Error removiendo dueño');
            res.status(500, err.message);
         }else{
            res.status(200).jsonp({message: 'dueño borrado'});
         };
      });
   });
}