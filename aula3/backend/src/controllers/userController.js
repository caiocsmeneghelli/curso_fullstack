module.exports = {
    autentica(req, res)
    {
        const {login, senha} = req.body;
        if(login == 'admin')
        {
            res.send(`Bem vindo ${login}`);
        }
        else
        {
            res.send(`Usuario ${login} nao encontrado.`);
        }
    },
    listUsers(req, res)
    {
        res.json({
            "usuario" : "admin",
            "senha" : "admin"
        })
    },
    loginHeaders (req, res) {
        const response = req.headers.token;
        res.json(response);
    }
}