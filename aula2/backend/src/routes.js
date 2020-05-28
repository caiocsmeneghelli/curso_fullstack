const express = require('express');
const routes = express.Router();
const userController = require('');

routes.get('/users/', function(req, res)
{
    res.json({
        "usuario" : "admin",
        "senha" : "admin"
    })
});

routes.post('/autentica',userController.autentica);

routes.post('/login', function(req, res)
{
    const response = req.headers.token;
    res.json(response);
})

//  Pegar parametros da URL
routes.post('/notafiscal/:nf', function(req, res)
{
    const response = req.params.nf;
    res.send(response);
});
module.exports = routes;