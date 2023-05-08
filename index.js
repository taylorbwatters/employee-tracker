const inquirer = require('inquirer');
const mysql = require('mysql2');

const prompt = inquirer.createPromptModule();

// const connection = mysql.createConnection ({
//     host: 'localhost',
//     user: 'root',
//     database: ''
// });

const initialQuestion = [{
    name: 'initialQuestion',
    message: 'What would you like to do?',
    type: 'list',
    choices: [
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update an Employee Role',
        'View All Departments',
        'View All Roles',
        'View All Employees',
    ],
}];

const questions = {
    ['Add Department']: [
        {
            name:'departmentName',
            message:'What is the name of the department?',
            type:'input'
        },
    ],
    ['Add Role']: [
        {
            name:'roleName',
            message:'What is the name of the Role?',
            type:'input'
        },
        {
            name:'roleSalary',
            message:'What is the salary of the role',
            type:'input'
        },
        {
            name:'roleDepartment',
            message:'Which department does the role belong to?',
            type:'list',
            choices: ['sql query for departments']
        },
    ],
    ['Add Employee']: [
        {
            name:'firstName',
            message: 'What is the employee\'s first name?',
            type:'input'
        },
        {
            name:'lastName',
            message:'What is the employee\'s last name?',
            type:'input'
        },
        {
            name:'employeeRole',
            message:'What is the employee\'s role?',
            type:'list',
            choices: ['fill in with sql results']
        },
        {
            name:'employeeManager',
            message:'Who is the employee\'s manager? ',
            type:'list',
            choices:['fill in with sql results']

        },
    ],
    ['Update an Employee Role']: [
        {
            name:'updateEmployeeRole',
            message:'Which employee\'s role do you want to update?',
            type:'list',
            choices:['fill in with sql results']
        },
        {
            name:'updatedRole',
            message:'Which role do you want to assign the selected employee?',
            type:'list',
            choices:['fill in with sql results']
        },
    ],
};

async function main() {
    try {
        const initialAnswers = await prompt(initialQuestion);
        const initialAnswer = initialAnswers.initialQuestion;
        
        switch (initialAnswer) {
            case 'Veiw All Departments': {
                break;    // TODO: sql query on the Departments Table
            }
            case 'View All Roles': {
                break;    // TODO: sql query on the Roles Table
            }
            case 'View All Employees': {
                break;    // TODO: sql query on the Employees Table
            }
            case 'Add Department': {
                const answers = await prompt(questions[initialAnswer]);
                answers.departmentName;


                // TODO: write department name to the Department table
                break;
            }
            case 'Add Role': {
                // TODO: insert the results of the query for Departments into the 
                // questions[2].choices
                const answers = prompt(questions[initialAnswer]);

                // TODO: write the roleName, roleSalary, roleDepartment to the Role table
                // ensure that the roleDepartment is an foreign key reference to the existing roles
                break;
            }
            case 'Add Employee': {
                // TODO: insert the results of the query for Roles and Employees (for manager) into the 
                // questions[2,3].choices
                const answers = prompt(questions[initialAnswer]);
                break;    
            }
            case 'Update Employee Role': {
                // TODO: insert the results of the query for Roles into the 
                // questions[1].choices
                const answers = prompt(questions[initialAnswer]);
                break;
            }
            default:
                throw new Error('invalid initialAnswer: ' + initialAnswer);
        }

        
    } catch (err) {
        if (err.isTtyError) {
            console.log('Prompt can\'t be rendered in the current environment');
        } else {
            console.error(err);
        }
    }

}

main();