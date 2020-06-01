const sql = require('mssql')
var config = {
    user: 'sa',
    password: '1234',
    server: 'localhost',
    database: 'BD_DONCOMELON'
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a SQL')
        return pool
    }).catch(err => console.log('Conexion Fallida', err))

module.exports = { sql, poolPromise }