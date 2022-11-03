import inquirer from "inquirer";

// Do I even need to import express here? 
// import express from "express";
// why does the router cause it to crash? 
// const router = express.router();

import connection from "./db/connection.js";

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
		console.log(answer.want);
		console.log(response);
		console.log(typeof response);
		console.log(response.includes("department"));

		// "whenever you need to use let or const declarations in a `case` clause, wrap it in a block."
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#description
		switch (true) {
			case response.includes("departments"): {
				const sql = `SELECT department_name 
							AS Departments 
							FROM employee_tracker.departments;`;

				connection.query(sql, (err, rows) => {
					if (err) {
						res.status(500).json({ error: err.message });
						return;
					}
					res.json({
						message: "success",
						data: rows,
					});
				});
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
