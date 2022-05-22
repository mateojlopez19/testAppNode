const express = require('express'); //Framework Node.js
const app = express(); // Instancia de la clase express
const bodyParser = require('body-parser'); // Capturar los datos del body del frontend
const morgan = require('morgan'); //Información de peticiones server
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); // Recibir datos principales desde formulario
app.use(morgan('dev')); // Info de la peticion HTTP al server
app.use(bodyParser.json()); // Aceptar formato json
// app.use(morgan('combined'));

// Routes
app.use('/api/users', require('./api/users'));

app.get('/', (req, res) => {
    res.send({message: 'Hello ADSI 2231424'});
});

app.listen(app.get('port'), ()=>console.log(`server running on port ${app.get('port')}`)); // Iniciando servidor
