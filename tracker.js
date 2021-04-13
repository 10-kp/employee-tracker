const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
// const chalk = require('chalk');
const choiceOptions = ["View all departments", "View all employees", "View all roles", "Add employee", "Update employee roles", "Exit"]


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
                case "View all departments":
                 viewDepartment();
                 break;
                case "View all employees":
                 viewEmployees();
                 break;
                // case "View all roles":
                //  viewDept();
                //  break;
                // case "Add employee":
                //  viewDept();
                //  break;
                // case "Update employee roles":
                //  viewDept();
                //  break;
                // case "Exit":
                //  viewDept();
                //  break;
                
                };   
            });
        };

        const viewDepartment = () => {
            connection.query(`SELECT * FROM department`, (err, res) => {
                if (err) throw err;
                console.table("All Departments", res);
                start();
            });
        };
        const viewEmployees = () => {
            connection.query(`SELECT * FROM employees`, (err, res) => {
                if (err) throw err;
                console.table("All Employees", res);
                start();
            });
        };

    connection.connect(err => {
    if(err) throw err;
      start();
});
        





//         {
//             name: "employeeFirstName",
//             type: 'input',
//             message: "What is the employee's first name?"
//         },
//         {
//             name: "employeeLastName",
//             type: 'input',
//             message: "What is the employee's last name?"
//         },
//         {
//             name: "department",
//             type: "list",
//             message: `To which deparment does ${employeeFirstName} ${employeeLastName} belong?`,
//             choices: ["Marketing", "IT", "Accountng", "Sales", "Finance"]
//         },
//         {
//             name: "employeeRole",
//             type: "list",
//             message: "What is the employee's role?",
//             choices: ["Marketing Head", "Marketing Director", "Accountng Head", "Accountng Director", "Sales Head", "Sales Director", "Finance Head", "Finance Director", "Receptionist"]
    
//         }.then(answer => {
//             if(answer.employeeTitle === "Marketing Head"){
//             inquirer.prompt([
//                 {
//                 name: "marketingHeadSalary",
//                 type: "number",
//                 message: "What is the Marketing Head's Salary?"
//                 },
//             ]);
//         };
//     });
// } else if (answer.employeeTitle === "Marketing Director"){
//     inquirer.prompt([
//         {
//         name: "marketingDirector",
//         type: "number",
//         message: "What is the Marketing Director's Salary?"
//         },
//     ]);
// }