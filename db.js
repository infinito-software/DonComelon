const sql = require('mssql')
var config = {
    user: 'DB_A62319_doncomeloniq_admin',
    password: 'INFINITO0405',
    server: 'sql5045.site4now.net',
    database: 'DB_A62319_doncomeloniq'
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a SQL')
        return pool
    }).catch(err => console.log('Conexion Fallida', err))

module.exports = { sql, poolPromise }