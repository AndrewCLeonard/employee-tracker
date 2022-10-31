DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS job_titles;
DROP TABLE IF EXISTS departments;

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY REFERENCES 

    PRIMARY KEY(id),
    

)

CREATE TABLE job_titles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE SET NULL
    salary INTEGER NOT NULL,
    job_description TEXT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) 
)
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(50) NOT NULL,

)