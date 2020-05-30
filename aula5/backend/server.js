const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
const rDir = require('require-dir');


//configs
server.use(cors());
server.use(express.json());

// Database connection
mongoose.connect('mongodb+srv://admin:admin@cluster0-3hejw.mongodb.net/integraGit?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});

// Models

rDir('./src/models');

//routes

server.use('/api', require('./src/routes'));


server.listen(3002);
console.log('Server rodando!')