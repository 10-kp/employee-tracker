DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (100) NOT NULL,
category VARCHAR(100) NOT NULL,
starting_bid INT DEFAULT 0,
highest_bid INT DEFAULT 0,
PRIMARY KEY (id)
);