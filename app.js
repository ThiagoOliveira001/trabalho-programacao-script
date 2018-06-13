const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

require('./config/config')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

(function loadRoutes() {
    require('./app/routes/ping')(app);
    require('./app/routes/index')(app);
    require('./app/routes/operadora')(app);
})();

app.listen(global.config.port, () => {
    console.log(`SERVER USING PORT ${global.config.port}`);
});