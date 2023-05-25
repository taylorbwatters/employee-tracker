const mysql = require('mysql2/promise');

async function executeQuery(query) {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'employee_tracker',
        password: 'password',
    });

    const res = await conn.query(query);
    await conn.end();

    return res;
}

module.exports = { executeQuery };