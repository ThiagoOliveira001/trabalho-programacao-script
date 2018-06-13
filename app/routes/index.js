const ctrl = require('../controllers/index');

module.exports = (app) => {
    app.get('/', ctrl.home);
}