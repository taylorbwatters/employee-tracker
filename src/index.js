const inquirer = require('inquirer');

const { questions, initialQuestion } = require('./questions');

const { addDepartment } = require('./queries/addDepartment');
const { addRole } = require('./queries/addRole');
const { addEmployee } = require('./queries/addEmployee');
const { updateEmployeeRole } = require('./queries/updateEmployeeRole');

const { getAllDepartments } = require('./queries/getAllDepartments');
const { getAllRoles } = require('./queries/getAllRoles');
const { getAllEmployees } = require('./queries/getAllEmployees');

const prompt = inquirer.createPromptModule();

async function main() {
    try {
        const initialAnswers = await prompt(initialQuestion);
        const initialAnswer = initialAnswers.initialQuestion;
        
        switch (initialAnswer) {
            case 'Veiw All Departments': {
                const departments = await getAllDepartments();
                console.table(departments);
                break;
            }
            case 'View All Roles': {
                const roles = await getAllRoles();
                console.table(roles);
                break;
            }
            case 'View All Employees': {                
                const employees = await getAllEmployees();
                console.table(employees);
                break;
            }
            case 'Add Department': {
                const answers = await prompt(questions[initialAnswer]);

                addDepartment(answers.departmentName);
                break;
            }
            case 'Add Role': {
                const departments = await getAllDepartments();
                questions[initialAnswer][2].choices = departments.map(
                    ({ name }) => name,
                );

                const { 
                    roleName, 
                    roleSalary, 
                    roleDepartment,
                } = await prompt(questions[initialAnswer]);

                const { id: departmentId } = departments.find(
                    ({ name }) => name === roleDepartment,
                );

                addRole(roleName, parseFloat(roleSalary) ?? 0, departmentId);
                break;
            }
            case 'Add Employee': {
                const roles = await getAllRoles();
                questions[initialAnswer][2].choices = roles.map(
                    ({ name }) => name,
                );

                const managers = await getAllEmployees();
                questions[initialAnswer][3].choices = managers.length > 0 ? managers.map(
                    ({ first_name, last_name }) => `${first_name} ${last_name}`,
                ) : ['CEO'];

                const { 
                    firstName, 
                    lastName, 
                    employeeRole,
                    employeeManager,
                } = await prompt(questions[initialAnswer]);

                const { id: roleId } = roles.find(({ name }) => name === employeeRole);
                const { id: managerId } = managers.find(({ first_name, last_name }) => {
                    return `${first_name} ${last_name}` === employeeManager;
                }) ?? {};


                addEmployee(roleId, managerId, firstName, lastName);
                break;    
            }
            case 'Update an Employee Role': {
                const employees = await getAllEmployees();
                questions[initialAnswer][0].choices = employees.length > 0 ? employees.map(
                    ({ first_name, last_name }) => `${first_name} ${last_name}`,
                ) : ['CEO'];

                const roles = await getAllRoles();
                questions[initialAnswer][1].choices = roles.map(
                    ({ name }) => name,
                );
                
                const { 
                    updatedEmployee,
                    updatedRole,
                } = await prompt(questions[initialAnswer]);

                const { id: roleId } = roles.find(({ name }) => name === updatedRole);
                const { id: employeeId } = employees.find(({ first_name, last_name }) => {
                    console.log(first_name);
                    console.log(last_name);
                    console.log(updatedEmployee);

                    return `${first_name} ${last_name}` === updatedEmployee;
                }) ?? {};

                updateEmployeeRole(employeeId, roleId);
                break;
            }
            default:
                throw new Error('invalid initialAnswer: ' + initialAnswer);
        }

        main();
    } catch (err) {
        if (err.isTtyError) {
            console.log('Prompt can\'t be rendered in the current environment');
        } else {
            console.error(err);
        }
    }

}

main();