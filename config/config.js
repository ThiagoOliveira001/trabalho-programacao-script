const config = {
    host: '0.0.0.0',
    port: 3000,
    sql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'teste',
        database: 'TELEFONIA'
    }
};

module.exports = () => {
    global.config = config;
}