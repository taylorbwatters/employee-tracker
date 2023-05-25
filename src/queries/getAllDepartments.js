const { executeQuery } = require('../utils/executeQuery');

async function getAllDepartments() {
    const [rows] = await executeQuery('SELECT * FROM departments');
    return rows;
}

module.exports = { getAllDepartments };