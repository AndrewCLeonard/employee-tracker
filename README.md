## User Story

### AS A business owner

I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

###Acceptance Criteria

GIVEN a command-line application that accepts user input

| WHEN I...                         | THEN I AM...                                                                                                                                                                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| start the application             | presented with the following options: <ul><li>view all departments</li> <li>view all roles</li><li>view all employees</li><li>add a department</li> <li>add a role</li><li>add an employee</li> <li>update an employee role</li> |
| choose to view all departments    | presented with a formatted table showing department names and department ids                                                                                                                                                     |
| choose to view all roles          | presented with the job title, role id, the department that role belongs to, and the salary for that role                                                                                                                         |
| choose to view all employees      | presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to                                            |
| choose to add a department        | prompted to enter the name of the department and that department is added to the database                                                                                                                                        |
| choose to add a role              | prompted to enter the name, salary, and department for the role and that role is added to the database                                                                                                                           |
| choose to add an employee         | prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database                                                                                                            |
| choose to update an employee role | prompted to select an employee to update and their new role and this information is updated in the database                                                                                                                      |

## Dependencies

| NPM Package   | Description | Link                                        |
| ------------- | ----------- | ------------------------------------------- |
| MySQL2        |             |                                             |
| Inquirer      |             |                                             |
| console.table |             | https://www.npmjs.com/package/console.table |
| express       |             |                                             |
| nodemon       |             |                                             |

## To Do

-   make queries asynchronous using MySQL2 `.promise()` function on Connections https://www.npmjs.com/package/mysql2

## Lessons Learned

### SQL

-   No need to/can't reuse the same `CONSTRAINT` column name. E.g.
    -   I need to know the department for employee
    -   the job_title table tells me the department that job title is part of
    -   I don't need to add department to the employee table
