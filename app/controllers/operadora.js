const model = require('../models/operadora');

function selecionar(req, res) {
    model.selecionar(req.query, (err, data) => {
        if (err)
            res.status(500).json({message: err.message});
        console.log(data);    
        res.status(200).render('pages/operadora-list', {
            operadoras: data[0]
        });
    });
}

module.exports = {
    selecionar
}