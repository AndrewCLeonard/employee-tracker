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
			case response.includes("view all roles"):
				db.query(
					`SELECT department_name 
						AS Departments 
						FROM employee_tracker.departments
						ORDER BY department_name;`,
					function (err, results, fields) {
						console.table(results);
					}
				);
				break;
			case response.includes("view all employees"):
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
