const ctrl = require('../controllers/telefonia');

module.exports = (app) => {
    app.get('/telefones', ctrl.selecionar);
    app.get('/telefones/novo', ctrl.getForm);
    app.post('/telefones/novo', ctrl.inserir);
}
