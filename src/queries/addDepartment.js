const { executeQuery } = require('../utils/executeQuery');

async function addDepartment(name) {
    const [result] = await executeQuery(
        `INSERT INTO departments (name) VALUES ('${name}')`
    );
    
    return result.insertId;
}

module.exports = { addDepartment };