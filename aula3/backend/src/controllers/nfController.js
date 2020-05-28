module.exports = {
    nfes (req, res) {
        const response = req.params.nf;
        res.send(response);
    }
}