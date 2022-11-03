import inquirer from "inquirer";
import connection from "./db/connection.js";

// Do I even need to import express here?
// import express from "express";
// why does the router cause it to crash?
// const router = express.router();

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
				connection.query(
					`SELECT department_name 
						AS Departments 
						FROM employee_tracker.departments;`,
					function (err, results, fields) {
						results.JSON
					}
				);
				break;
			}
			case response.includes("view all roles"):
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
