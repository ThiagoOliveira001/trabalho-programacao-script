const model = require('../models/telefonia');
const modelOpe = require('../models/operadora');

function selecionar(req, res) {
    model.selecionar((err, data) => {
        if (err) {
            res.status(500).json({message: 'Erro'});
        } else {
            res.render('pages/telefone-list', {
                telefones: data[0]
            });
        }
    });
}

function getForm(req, res) {
    modelOpe.selecionar((err,data) => {
        if (err) {
            res.status(500).json({message: err.message});
        } else {
            res.status(200).render('pages/telefone-cadastro', {
                operadoras: data[0]
            });
        }
    });
}

function inserir(req, res) {
    console.log(req.body);
    model.inserir(req.body, (err) => {
        if (err) {
            res.status(500).json({message: err.message});
        } else {
            res.redirect('/telefones/novo');
        }
    });
}

module.exports = {
    selecionar,
    getForm,
    inserir
};