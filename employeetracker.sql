DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department (
id INT AUTO_INCREMENT,
department_name VARCHAR (30),
PRIMARY KEY (id)
);

SELECT * FROM department;

CREATE TABLE roles (
id INT AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL (10,2),
department_id INT (30),
FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY (id)
);
SELECT * FROM roles;

CREATE TABLE employees (
id INT AUTO_INCREMENT,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT,
manager_id INT,
FOREIGN KEY(role_id) REFERENCES roles(id),
FOREIGN KEY(manager_id) REFERENCES employees(id),
PRIMARY KEY (id)
);
DROP TABLE employees;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Micheal', 'Jordan', 1, NULL),
('May', 'Day', 2, "Micheal Jordan"),
('Coors', 'Light', 3, NULL),
('Cate', 'Blanchett', 4, "Coors Light"),
('Wayne', 'Greztky', 5, NULL),
('Ted', 'Willams', 1, "Wayne Greztky"),
('Kate', 'Winslet', 2, NULL),
('Pam', 'Beesly', 3, "Kate Winslet");


SELECT * FROM employee;