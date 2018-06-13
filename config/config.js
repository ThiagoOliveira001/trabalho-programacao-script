const config = {
    host: '0.0.0.0',
    port: 3000,
    sql: {
        host: 'localhost',
        user: 'root',
        password: 'teste',
        database: 'telefonia'
    }
};

module.exports = () => {
    global.config = config;
}