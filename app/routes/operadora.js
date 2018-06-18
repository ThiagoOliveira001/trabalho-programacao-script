const ctrl = require('../controllers/operadora');

module.exports = (app) => {
    app.get('/operadoras', ctrl.selecionar);
    app.post('/operadoras/novo', ctrl.inserir);
    app.get('/operadoras/novo', ctrl.getForm);
    app.get('/operadoras/deletar/:id', ctrl.deletar);
    app.post('/operadoras/editar/:id', ctrl.alterar);
}