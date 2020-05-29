const express = require('express');
const server = express();
const mongose = require('mongoose');

const requireDir = require('require-dir');

// config mongo
mongose.connect('mongodb+srv://admin:admin@cluster0-3hejw.mongodb.net/fullstackreact?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology : true});

//config
server.use(express.json());

// Import models
requireDir('./src/models');
// Routes
server.use('/api',require('./src/routes'));
//server.use('/test', require('./src/routes'))


server.listen(3002);
console.log('servidor escutando na porta 3002');