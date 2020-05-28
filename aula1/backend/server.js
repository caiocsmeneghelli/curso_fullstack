const express = require('express');
const server = express();

server.use('/api', require('./src/routes'))


server.listen(3000);
console.log("Servidor ouvindo a porta 3000");