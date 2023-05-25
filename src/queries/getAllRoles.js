const { executeQuery } = require('../utils/executeQuery');

async function getAllRoles() {
    const [rows] = await executeQuery('SELECT * FROM roles');
    return rows;
}

module.exports = { getAllRoles };