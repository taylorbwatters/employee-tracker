const { executeQuery } = require('../utils/executeQuery');

async function getAllEmployees() {
    const [rows] = await executeQuery('SELECT * FROM employees');
    return rows;
}

module.exports = { getAllEmployees };