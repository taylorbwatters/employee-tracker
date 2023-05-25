const { executeQuery } = require('../utils/executeQuery');

async function addEmployee(
    roleId, managerId = 1, firstName, lastName,
) {
    const [result] = await executeQuery(
        `
        INSERT INTO employees (role_id, manager_id, first_name, last_name) 
        VALUES (${roleId}, ${managerId}, '${firstName}', '${lastName}')
        `
    );
    
    return result.insertId;
}

module.exports = { addEmployee };