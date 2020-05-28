const express = require('express');
const server = express();
const mongoose = require('mongoose');

// Banco de dados
//  mongoose.connect('mongodb://ip_servidor:27017/nome_do_banco');
mongoose.connect('mongodb+srv://admin:<admin>@cluster0-3hejw.mongodb.net/cursoreact?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology: true});
//config
server.use(express.json());


// Routes
server.use('/api',require('./src/routes'));
//server.use('/test', require('./src/routes'))


server.listen(3002);
console.log('servidor escutando na porta 3002');