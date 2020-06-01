const express = require('express');
const routes = express.Router();
const userController = require('./controller/userController');

routes.post('/users', userController.persistUser);
routes.get('/users',  userController.listUsers);
routes.get('/resp', userController.getUserGit);
routes.post('/persistgit', userController.persistGit);

module.exports = routes;