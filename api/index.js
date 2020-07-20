'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

// Conexión Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social', { useMongoClient: true})
		.then(() => {
			console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente!!");
		
			// Crear servidor
			app.listen(port, () => {
				console.log("Servidor corriendo en http://localhost:3800");
			});
		})
		.catch(err => console.log(err));