DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES 
("Marketing"),
("IT"),
("Accounting"),
("Sales"),
("Finance");
SELECT * FROM department;

CREATE TABLE role (
id INT NOT NULL,
title VARCHAR (30)NOT NULL,
salary DECIMAL (30) NOT NULL,
department_id INT (30) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id) VALUES
("Marketing"),
("IT"),
("Accounting"),
("Sales"),
("Finance");
SELECT * FROM role;

CREATE TABLE employee(
id INT PRIMARY KEY,
fist_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL
);
SELECT * FROM employee;