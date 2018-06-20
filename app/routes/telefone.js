const ctrl = require('../controllers/telefonia');

module.exports = (app) => {
    app.get('/telefones', ctrl.selecionar);
    app.get('/telefones/novo', ctrl.getForm);
    app.get('/telefones/deletar/:id', ctrl.deletar);
    app.post('/telefones/novo', ctrl.inserir);
    app.post('/telefones/editar/:id', ctrl.alterar);
}
