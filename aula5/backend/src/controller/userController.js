const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

module.exports = {
    async persistUser(req, res) {
        const payload = await User.create(req.body);
        //const payload = await req.body;
        //User.create(payload);
        res.json(payload);
    },
    async listUsers(req, res) {
        const response = await User.find();
        res.json(response);
    },
    async getUserGit(req, res) {
        const response = await axios.get('https://api.github.com/users/caiocsmeneghelli');
        res.json(response.data);
    },
    async persistGit(req, res) {
        const {gitUser} = req.body;
        const response = await axios.get(`https://api.github.com/users/${gitUser}`);
        const {
            login,
            name,
            avatar_url,
            company,
            public_repos, 
            followers,
            bio
        } = response.data;
        const payload = await User.create({
            login,
            name,
            avatar_url,
            company,
            public_repos,
            followers,
            bio
        });
        res.json(payload);
        // console.log(login, name, avatar_url);
        // res.send().status();
    }
    // persistir no banco usuarios do git
    // persistir no banco suuarios do git se criado antes de 2020

    // novo backend 1:[lat, lon] 2[lat,lon] => distancia
}