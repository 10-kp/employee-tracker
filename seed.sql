USE employeeTracker_db;

INSERT INTO departments (department_name) VALUES 
("Marketing"),
("IT"),
("Accounting"),
("Sales"),
("Finance");

INSERT INTO roles (title, salary, department_id) VALUES
('Marketing Head', 85000, 1),
('Marketing Director', 75000, 2),
('Accountng Head', 70000, 3),
('Accountng Director', 60000, 4),
('Sales Head', 92000, 5),
('Sales Director', 66000, 6),
('Finance Head', 85000, 7),
('Finance Director', 61000, 8),
('Receptionist', 60000, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Micheal', 'Jordan', 1, NULL),
('May', 'Day', 2, 'Micheal Jordan'),
('Coors', 'Light', 3, NULL),
('Cate', 'Blanchett', 4, 'Coors Light'),
('Wayne', 'Greztky', 5, NULL),
('Ted', 'Willams', 6, 'Wayne Greztky'),
('Kate', 'Winslet', 7, NULL),
('Pam', 'Beesly', 9, NULL);