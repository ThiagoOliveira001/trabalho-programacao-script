const mysql = require('mysql').createConnection(global.config.sql);

function selecionar(cb) {
    mysql.query('call selecionarTelefones()', (err, data) => {
        if (err)
            return cb(err);
        return cb(null, data);
    });
}

function inserir(telefone, cb) {
    mysql.query(`call inserirTelefone(?,?,?,?,?)`,
        [
            telefone.descricao,
            telefone.modelo,
            telefone.cor,
            telefone.chips,
            telefone.operadora
        ],
        (err) => {
            if (err)
                return cb(err);
            return cb(null);
    });
}


function alterar(id,telefone,cb) {
    mysql.query(`call alterarTelefone(?,?,?,?,?,?)`,
        [
            id,
            telefone.descricao,
            telefone.modelo,
            telefone.cor,
            telefone.chips,
            telefone.operadora
        ],
        (err) => {
            if (err)
                return cb(err);
            return cb(null);
    });
} 

function deletar(id, cb) {
    mysql.query('call deletarTelefone(?)',id ,(err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(err);
        }
    });
}

module.exports = {
    selecionar,
    inserir,
    alterar,
    deletar
};