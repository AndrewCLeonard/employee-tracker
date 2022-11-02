import inquirer from "inquirer";

// get the client
import mysql2 from mysql2;

// create the connection to database
const connection = mysql2.createConnection({
	host: "localhost",
	user: "root",
	password: "Rg*4y4avva@0fO!KB0!t",
	database: "employee_tracker",
});

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
