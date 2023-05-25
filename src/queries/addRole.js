const { executeQuery } = require('../utils/executeQuery');

async function addRole(
    name, salary, departmentId,
) {
    const [result] = await executeQuery(
        `
        INSERT INTO roles (department_id, name, salary) 
        VALUES (${departmentId}, '${name}', ${salary})
        `
    );
    
    return result.insertId;
}

module.exports = { addRole };