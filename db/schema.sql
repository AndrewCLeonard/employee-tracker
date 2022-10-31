DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS job_titles;
DROP TABLE IF EXISTS departments;

CREATE TABLE employees (
    employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY 

)

CREATE TABLE job_titles (
    job_title_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    
)
CREATE TABLE departments