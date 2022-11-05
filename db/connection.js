// const mysql = require("mysql2");
import mysql from "mysql2/promise";

// Connect to db
const connection = await mysql.createConnection(
	{
		host: "localhost",
		// My MySQL username,
		user: "root",
		// My password:
		password: "Rg*4y4avva@0fO!KB0!t",
		database: "employee_tracker",
	},
	console.log("connected to the employee database")
);

export default connection;
