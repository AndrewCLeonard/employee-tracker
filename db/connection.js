// 1. convert require --> import statement
// const mysql = require("mysql2");
import mysql from "mysql2";

// 1A. use the "promise wrapper" https://www.npmjs.com/package/mysql2#using-promise-wrapper
// import mysql from "mysql2/promise";

// 2. Connect to db
const connection = mysql.createConnection(

// 2A. Use the Promise API. 
// const connection = await mysql.createConnection(
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
