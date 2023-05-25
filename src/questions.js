const initialQuestion = [{
    name: 'initialQuestion',
    message: 'What would you like to do?',
    type: 'list',
    choices: [
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update an Employee Role',
        'Veiw All Departments',
        'View All Roles',
        'View All Employees',
    ],
}];

const questions = {
    ['Add Department']: [
        {
            name: 'departmentName',
            message: 'What is the name of the department?',
            type: 'input'
        },
    ],
    ['Add Role']: [
        {
            name: 'roleName',
            message: 'What is the name of the Role?',
            type: 'input'
        },
        {
            name: 'roleSalary',
            message: 'What is the salary of the role',
            type: 'input'
        },
        {
            name: 'roleDepartment',
            message: 'Which department does the role belong to?',
            type: 'list',
            choices: ['sql query for departments']
        },
    ],
    ['Add Employee']: [
        {
            name: 'firstName',
            message: 'What is the employee\'s first name?',
            type: 'input'
        },
        {
            name: 'lastName',
            message: 'What is the employee\'s last name?',
            type: 'input'
        },
        {
            name: 'employeeRole',
            message: 'What is the employee\'s role?',
            type: 'list',
            choices: []
        },
        {
            name: 'employeeManager',
            message: 'Who is the employee\'s manager? ',
            type: 'list',
            choices: []

        },
    ],
    ['Update an Employee Role']: [
        {
            name: 'updatedEmployee',
            message: 'Which employee\'s role do you want to update?',
            type: 'list',
            choices: []
        },
        {
            name: 'updatedRole',
            message: 'Which role do you want to assign the selected employee?',
            type: 'list',
            choices: []
        },
    ],
};

module.exports = { initialQuestion, questions };
