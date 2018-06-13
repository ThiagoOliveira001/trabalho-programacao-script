const mysql = require('mysql').createConnection(global.config.sql);

function  selecionar(filtro,cb) {
    mysql.query(`call selecionarOperadoras()`,
        (err, res) => {
            if (err) { return cb(err) };
            return cb(null,res);
        }
    );
}

module.exports = {
    selecionar
};