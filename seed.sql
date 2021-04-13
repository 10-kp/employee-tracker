USE employeeTracker_db;

INSERT INTO department (department_name) VALUES 
("Marketing"),
("IT"),
("Accounting"),
("Sales"),
("Finance");

-- SELECT * FROM department;

INSERT INTO roles (title, salary, department_id) VALUES
('Marketing Head', 85000, 1),
('Marketing Director', 75000, 2),
('Accountng Head', 70000, 3),
('Accountng Director', 60000, 4),
('Sales Head', 92000, 5),
('Sales Director', 66000, 6),
('Finance Head', 85000, 6),
('Finance Director', 61000, 7),
('Receptionist', 60000, 8);

-- SELECT * FROM role;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Micheal', 'Jordan', 23, 023),
('May', 'Day', 12, 109),
('Coors', 'Light', 6, 423),
('Cate', 'Blanchett', 24, 005),
('Wayne', 'Greztky', 11, 555),
('Ted', 'Willams', 55, 334),
('Kate', 'Winslet', 15, 222),
('Pam', 'Beesly', 2, 007);

-- SELECT * FROM employee;