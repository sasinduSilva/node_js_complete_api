const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit:10,
    host:process.env.host,
    user:process.env.user,
    database:process.env.database
});

pool.on('connection', (connection) => {
    console.log('New connection created');
});

pool.on('error', (err) => {
    console.error('mysql pool error', err);
});

module.exports = pool;

