DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR (30),
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30)NOT NULL,
salary DECIMAL (10,2) NOT NULL,
department_id INT (30) NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY (id)
);

CREATE TABLE employees (
id INT AUTO_INCREMENT,
fist_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL,
FOREIGN KEY(role_id) REFERENCES roles(id),
FOREIGN KEY(manager_id) REFERENCES employees(id),
PRIMARY KEY (id)
);
