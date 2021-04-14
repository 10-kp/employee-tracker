USE employeeTracker_db;

INSERT INTO departments (department_name) VALUES 
("Marketing"),
("IT"),
("Accounting"),
("Sales"),
("Finance");

INSERT INTO roles (title, salary, department_id) VALUES
('Marketing Head', 85000, 1),
('Marketing Director', 75000, 1),
('Accountng Head', 70000, 2),
('Accountng Director', 60000, 2),
('Sales Head', 92000, 3),
('Sales Director', 66000, 3),
('Finance Head', 85000, 4),
('Finance Director', 61000, 4),
('Receptionist', 60000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Micheal', 'Jordan', 1, NULL),
('May', 'Day', 2, Null),
('Coors', 'Light', 3, NULL),
('Cate', 'Blanchett', 4, NULL),
('Wayne', 'Greztky', 6, NULL),
('Ted', 'Willams', 7, NULL),
('Kate', 'Winslet', 8, NULL),
('Pam', 'Beesly', 9, NULL);