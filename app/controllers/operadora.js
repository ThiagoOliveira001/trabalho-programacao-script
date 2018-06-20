const model = require('../models/operadora');

function selecionar(req, res) {
    model.selecionar((err, data) => {
        if (err)
            res.status(500).json({message: err.message});
        console.log(data);    
        res.status(200).render('pages/operadora-list', {
            operadoras: data[0]
        });
    });
}

function inserir(req, res) {
    model.inserir(req.body, (err, data) => {
        if (err) {
            res.status(500).json({message: err.message});
        } else {
            res.redirect('/operadoras/novo');                
        }
        //res.status(200).render('pages/operadora-cadastro');
    });
}

function alterar(req, res) {
    model.alterar(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500).json({message: err.message});
        } else {
            res.redirect('/operadoras');
        }
    });
}

function getForm(req, res) {
    res.status(200).render('pages/operadora-cadastro');
}

function deletar(req, res) {
    model.deletar(req.params.id, (err) => {
        if (err){
            res.status(500).json({message: err.message});
        } else {
            res.redirect('/operadoras');
        }
    });
}

module.exports = {
    selecionar,
    inserir,
    getForm,
    deletar,
    alterar
}