DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS job_titles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

CREATE TABLE job_titles (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    salary INTEGER NOT NULL,
    job_description TEXT,
    department INT,
    
    CONSTRAINT FK_department FOREIGN KEY (department)
        REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    fk_department INT NOT NULL,
    fk_job_title INT NOT NULL,

    PRIMARY KEY(id),
    INDEX (first_name, last_name),
    
    FOREIGN KEY (fk_department)
        REFERENCES departments(id),

    FOREIGN KEY (fk_job_title)
        REFERENCES job_titles(id)
)