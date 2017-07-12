var express = require('express'),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose'),
   methodOverride = require('method-override'),
   app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/',function(req, res){
   res.send('Hola!');
});

var petCtrl = require('./controllers/petController');
var ownerCtrl = require('./controllers/ownerController');
app.route('/pet')
   .post(petCtrl.addNew)
   .get(petCtrl.getAll);

app.route('/pet/:id')
   .get(petCtrl.getById)
   .put(petCtrl.update)
   .delete(petCtrl.delete);

app.route('/owner')
   .post(ownerCtrl.addNew);
//conexion a mongo
mongoose.connect('mongodb://localhost/mascotas', function(err, res){
   if(err) console.log('no conecto a mongo');
   console.log('conecto');
})
//Inicio server
app.listen(3000, function(){
   console.log('arrancó el server');
})