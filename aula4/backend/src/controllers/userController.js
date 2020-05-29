const mongoose = require('mongoose');
const User = mongoose.model('User')

module.exports = {
    async persistData(req, res) {
        const response = await req.body;
        res.send(response)
        console.log(response);
        User.create(response);
    },
    async listUsers(req, res){
        const response = await User.find();
        res.json(response);
    },
    // pesquisa com campo vindo da URL
    async findUsers(req, res){
        const rq = req.params.id;
        const response = await User.findById(rq);
        res.json(response);
    },
    async listOne(req, res){
        const response = await User.findById('5ed0553e770ba244444b5f49');
        res.json(response);
    },
    // Criar rota pesquisa, SEXO F Listar
    async listF(req, res){
        const response = await User.find({sex:"F"});
        res.json(response);
    },
    async listLt25(req, res){
        const response = await User.find({age:{$lt:66}});
        res.json(response);
    },
    async listManyFields(req, res){
        const response = await req.query.fields;
        console.log(response);
        res.json(response);
    }
    // Todos que possum menos que 25 anos
}