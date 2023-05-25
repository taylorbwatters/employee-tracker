const { executeQuery } = require('../utils/executeQuery');

async function updateEmployeeRole(employeeId, roleId) {
    const [result] = await executeQuery(
        `
        UPDATE employees SET role_id = ${roleId}
        WHERE id = ${employeeId}
        `
    );

    return result.insertId;
}

module.exports = { updateEmployeeRole };
