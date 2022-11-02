import inquirer from "inquirer";

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
		switch (response) {
			case response.includes("departments"):
				console.log("nailed it");
				break;

			default:
				console.log("no way no siree");
				break;
		}
	});
