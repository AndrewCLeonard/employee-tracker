import inquirer from "inquirer";
import db from "./db/connection.js";
import express from "express";
const router = express.Router();

import cTable from "console.table";

inquirer
	.prompt([
		{
			type: "rawlist",
			name: "want",
			message: "What do you want to do?",
			choices: [
				"view all departments",
				"view all roles",
				"view all employees",
				"add a department",
				"add a role",
				"add an employee",
				"update an employee role",
			],
		},
	])
	.then((answer) => {
		const response = JSON.stringify(answer);
		// Department Names & IDs

		// "whenever you need to use let or const declarations in a `case` clause, wrap it in a block."
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#description
		switch (true) {
			case response.includes("departments"): {
				db.query(
					`SELECT department_name
					AS Departments, id as Department_ID
					FROM employee_tracker.departments
					ORDER BY department_name;`,
					function (err, results, fields) {
						console.table(results);
					}
				);
				break;
			}
			//  job title, role id, the department that role belongs to, and the salary for that role
			case response.includes("view all roles"):
				console.log("view roles");
				db.query(
					`SELECT 
						job_titles.job_title AS "Job Title", 
						job_titles.id AS "Job ID", 
						departments.department_name AS "Department Name", 
						job_titles.salary AS Salary
					FROM job_titles
					INNER JOIN departments ON job_titles.department_id=departments.id
					ORDER BY job_title ASC;`,
					function (err, results, fields) {
						console.table(results);
					}
				);
				break;
			// formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
			case response.includes("view all employees"):
				db.query(
					`SELECT 
						employees.id AS ID,
						employees.first_name,
						employees.last_name
					FROM employees`
				);
				break;
			case response.includes("add a department"):
				break;
			case response.includes("add a role"):
				break;
			case response.includes("add an employee"):
				break;
			case response.includes("update"):
				break;

			default:
				console.log("default statement");
				break;
		}
	});
