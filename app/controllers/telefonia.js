const model = require('../models/telefonia');
const modelOpe = require('../models/operadora');

function selecionar(req, res) {
    modelOpe.selecionar((err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro' });
        } else {
            model.selecionar((err, data) => {
                if (err) {
                    res.status(500).json({ message: 'Erro' });
                } else {
                    res.render('pages/telefone-list', {
                        telefones: data[0],
                        operadoras: result[0]
                    });
                }
            });
        }
    });
}

function getForm(req, res) {
    modelOpe.selecionar((err, data) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).render('pages/telefone-cadastro', {
                operadoras: data[0]
            });
        }
    });
}

function inserir(req, res) {
    model.inserir(req.body, (err) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.redirect('/telefones/novo');
        }
    });
}

function alterar(req, res) {
    model.alterar(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.redirect('/telefones');
        }
    });
}

function deletar(req, res) {
    model.deletar(req.params.id, (err) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.redirect('/telefones');
        }
    });
}

module.exports = {
    selecionar,
    getForm,
    inserir,
    alterar,
    deletar
};