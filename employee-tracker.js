import inquirer from "inquirer";
import db from "./db/connection.js";
import express from "express";
const router = express.Router();

// this package changes the way `console.table` displays in the console.
import cTable from "console.table";

// using patterns from example repo https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/hierarchical.js

const MainMenuPrompt = {
	type: "rawlist",
	name: "want",
	message: "\n\n Welcome to the employee database. What do you want to do?",
	choices: [
		"view all departments", //
		"view all roles",
		"view all employees",
		"add a department",
		"add a role",
		"add an employee",
		"update an employee role",
	],
};

function mainMenu() {
	inquirer.prompt(MainMenuPrompt).then((answer) => {
		const response = JSON.stringify(answer);
		// Department Names & IDs

		switch (true) {
			case response.includes("departments"):
				viewAllDepartments();
				break;
			//  job title, role id, the department that role belongs to, and the salary for that role
			case response.includes("view all roles"):
				console.log("view roles");
				viewAllRoles();
				break;
			// formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
			case response.includes("view all employees"):
				viewAllEmployees();
				break;
			case response.includes("add a department"):
				addDepartment();
				break;
			case response.includes("add a role"):
				addRole();
				break;
			case response.includes("add an employee"):
				addEmployee();
				break;
			case response.includes("update"):
				updateEmployeerole();
				``;
				break;

			default:
				console.log("default statement");
				break;
		}
	});
}

const viewAllDepartments = () => {
	db.query(
		`SELECT 
			department_name
		AS 
			Departments, id as Department_ID
		FROM 
			employee_tracker.departments
		ORDER BY 
			department_name;`,
		function (err, results, fields) {
			console.table(results);
		}
	);
};

const viewAllRoles = () => {
	db.query(
		`SELECT 
			job_titles.job_title AS "Job Title", 
			job_titles.id AS "Job ID", 
			departments.department_name AS "Department Name", 
			job_titles.salary AS Salary
		FROM 
			job_titles
		INNER JOIN 
			departments ON job_titles.department_id=departments.id
		ORDER BY 
			job_title ASC;`,
		function (err, results, fields) {
			console.table(results);
		}
	);
};

const viewAllEmployees = () => {
	db.query(
		`SELECT 
			employees.id AS ID,
			employees.first_name,
			employees.last_name
		FROM 
			employees`
	);
};

const addDepartment = () => {};
const addRole = () => {};
const addEmployee = () => {};
const updateEmployeerole = () => {};

mainMenu();
