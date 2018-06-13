const ctrl = require('../controllers/operadora');

module.exports = (app) => {
    app.get('/operadoras', ctrl.selecionar);
}