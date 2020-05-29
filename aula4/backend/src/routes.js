const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user', userController.persistData);
routes.get('/listUsers', userController.listUsers);
routes.get('/userOne', userController.listOne);
routes.get('/findUsers/:id', userController.findUsers);
routes.get('/findF', userController.listF);
routes.get('/listLt', userController.listLt25);
routes.get('/bigQuery/:fields', userController.listManyFields);
module.exports = routes;