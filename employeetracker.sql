DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR (30),
PRIMARY KEY (id)
);

INSERT INTO department (department_name) VALUES 
("Marketing"),
("IT"),
("Accounting"),
("Sales"),
("Finance");
SELECT * FROM department;

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30)NOT NULL,
salary DECIMAL (10,2) NOT NULL,
department_id INT (30) NOT NULL,
FOREIGN KEY (departmenet_id) REFERENCES (PersonID)
);

INSERT INTO roles (title, salary, department_id) VALUES
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