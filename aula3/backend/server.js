const express = require('express');
const server = express();

//config
server.use(express.json());


// Routes
server.use('/api',require('./src/routes'));
//server.use('/test', require('./src/routes'))


server.listen(3002);
console.log('servidor escutando na porta 3002');