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
            return cb(null)
    });
}

module.exports = {
    selecionar,
    inserir
};