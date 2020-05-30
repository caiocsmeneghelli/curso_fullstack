const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

module.exports = {
    async persistUser(req, res){
        const payload = await User.create(req.body);        
        //const payload = await req.body;
        //User.create(payload);
        res.json(payload);
    },
    async listUsers(req, res){
        const response = await User.find();
        res.json(response);
    },
    async getUserGit(req, res){
        const response = await axios.get('https://api.github.com/users/caiocsmeneghelli');
        res.json(response.data);
    }
    // persistir no banco usuarios do git
    //persistir no banco suuarios do git se criado antes de 2020

    // novo backend 1:[lat, lon] 2[lat,lon] => distancia
}