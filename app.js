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

app.route('/')
   .post(petCtrl.addNew);

//conexion a mongo
mongoose.connect('mongodb://localhost/mascotas', function(err, res){
   if(err) console.log('no conecto a mongo');
   console.log('conecto');
})
//Inicio server
app.listen(3000, function(){
   console.log('arrancó el server');
})