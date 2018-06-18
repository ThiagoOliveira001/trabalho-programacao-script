const mysql = require('mysql').createConnection(global.config.sql);

function  selecionar(cb) {
    mysql.query(`call selecionarOperadoras()`,
        (err, res) => {
            if (err) { return cb(err) };
            return cb(null,res);
        }
    );
}

function inserir(operadora,cb) {
    mysql.query(`call inserirOperadora(?,?,?,?)`,
            [operadora.nome,
            operadora.fantasia,
            operadora.prefixo,
            operadora.cidade]
        ,
        (err) => {
            if (err) {
                return cb(err);
            }
            return cb(null);
        }
    )
} 

function alterar(id, operadora, cb) {
    mysql.query('call alterarOperadora(?,?,?,?,?)',
        [
            id,
            operadora.nome,
            operadora.fantasia,
            operadora.prefixo,
            operadora.cidade
        ],
        (err) => {
            if (err) {
                return cb(err);
            }
            return cb(null);
        }
    )
}

function deletar(id,cb) {
    mysql.query('call deletarOperadora(?)',id, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
}
module.exports = {
    selecionar,
    inserir,
    deletar,
    alterar
};