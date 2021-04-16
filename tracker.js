const inquirer = require("inquirer");
const mysql = require("mysql");
//Table
const cTable = require("console.table");

//Choices 
const choiceOptions = ["View all employees", "View all departments", "View all roles", "Add department", "Add employee", "Update roles", "Remove employee", "Exit"]

//Linking SQL for all employees
const queryAllEmployees = `SELECT employees.id, employees.first_name AS "First Name", employees.last_name AS "Last Name", roles.title, departments.department_name AS "Department", IFNULL(roles.salary, 'No Data') AS "Salary", CONCAT(manager.first_name," ",manager.last_name) AS "Manager"
FROM employees LEFT JOIN roles ON roles.id = employees.role_id LEFT JOIN departments ON departments.id = roles.department_id
LEFT JOIN employees manager ON manager.id = employees.manager_id ORDER BY employees.id;`

const connection = mysql.createConnection({
    host: 'localhost',

    //Create a port
    port: 3306,

    //Username
    user: 'root',

    //password
    password: 'phi11235',
    database: 'employeeTracker_db',
});

console.log(`Welcome to the Employee Tracker! What would you like to do?`);


const start = () => {
    inquirer.prompt(
        {
            name: "optionChoices",
            type: 'list',
            message: "Please select an option?",
            choices: choiceOptions

        }).then(answer => {
            switch (answer.optionChoices){
                case "View all employees":
                 viewEmployees();
                 break;
                case "View all departments":
                 viewDepartment();
                 break;
                case "View all roles":
                 viewRoles();
                 break;
                case "Add department":
                 addDepartment();
                 break;
                case "Add employee":
                 addEmployee();
                 break;
                case "Update role":
                 updateRole();
                case "Remove Employee":
                removeEmployee();
                 break;
                case "Exit":
                    console.log("Thank you for using Employee Tracker!");
                    connection.end();
                 break;
                
                };   
            });
        };

         // VIEW ALL EMPLOYEES
         const viewEmployees = () => {
            connection.query (queryAllEmployees, (err, res) => {
                if (err) throw err;
                console.table("All Employees", res);
                start();
            });
        };

        // VIEW DEPARTMENT
        const viewDepartment = () => {
            connection.query(`SELECT * FROM departments`, (err, res) => {
                if (err) throw err;
                console.table("All Departments", res);
                start();
            });
        };

        // VIEW ROLES
        const viewRoles = () => {
            connection.query(`SELECT * FROM roles`, (err, res) => {
                if (err) throw err;
                console.table("All Roles", res);
                start();
            });
        };

        // ADD DEPARTMENT
        const addDepartment = () => {
            connection.query(`SELECT department_name AS "Departments" FROM departments`, (err, results) => {
                if (err) throw err;

            inquirer.prompt([
                {
                    name: "addDept",
                    type: "input",
                    message: "What is the name of the department you want to add?"

                    // DO WE NEED TO ADD AN ID?
                }]).then(answer => {
                    connection.query(`INSERT INTO departments (department_name) VALUES( ? )`, answer.addDept)
                    start();
                    });
              });
            };

        // ADD EMPLOYEE
        const addEmployee = () => {
            connection.query(`SELECT * FROM employees`, (err, results) => {
                if (err) throw err;
                showEmployees = results.map(employees => ({ name: `${employees.first_name} ${employees.last_name}`, value: employees.id}))
            })
            inquirer.prompt([
                {
                    name: "addEmpFName",
                    type: "input",
                    message: "What is the employee's first name?"
                },
                {
                    name: "addEmpLName",
                    type: "input",
                    message: "What is the employee's last name?"
                },
                {
                    name: "addEmpRole",
                    type: "number",
                    message: "What is the employee's Role?",
                    choices: [1,2,3,4,5,6,7] //The linking does not work
                },
                {
                    name: "addEmpManager",
                    type: "input",
                    message: "What is the employee's manager's ID?",
                    choices: [1,2,3,4,5,6,7] // How to put names?
                }]).then(answer => {
                    connection.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answer.addEmpFName, answer.addEmpLName,answer.addEmpRole,answer.addEmpManager], (err, res) => {
                    if (err) throw err;
                    start();
                    });
                });
            // });
        };
        
        // UPDATE ROLE
        const updateRole = () => {
            connection.query(`SELECT * id, first_name, last_name, role_id, FROM employees`, (err, results) => {
                if (err) throw err;
            });
            inquirer.prompt([
                {
                    name: "updateName",
                    type: "input",
                    message: "Which employee would you like to update (first name only)?"
                },
                {
                    name: "updateRole",
                    type: "input",
                    message: "Enter the new role id",
                    choices: [1,2,3,4,5]

                }]).then(answer => {
                    connection.query(`UPDATE employees SET role_id = ? WHERE fist_name = ?` [answer.updateName, answer.updateRole], (err, res) => {
                    if (err) throw err;
                    console.table("Updated Roles", res);
                    start();
                    });
                });
            };

            // REMOVE EMPLOYEES
         const removeEmployee = () => {
            connection.query (queryAllEmployees, (err, ressults) => {
                if (err) throw err;
                // console.table(" ", res);
                inquirer.prompt([
                    {
                        name: "removeEmployee",
                        type: "input",
                        message: "Which employee would you like to remove?",
                        choices: []
                    }
                ]).then(answer => {
                    connection.query(`DELETE FROM employees where ?`, { id: answer.removeEmployee})
                    start();
            });
        });
    };


    connection.connect(err => {
    if(err) throw err;
      start();
    });