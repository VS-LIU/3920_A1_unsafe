const database = require('../databaseConnection');

async function printMySQLVersion() {
	let sqlQuery = `
		SHOW VARIABLES LIKE 'version';
	`;

	try {
		const results = await database.query(sqlQuery);
		console.log(`Successfully connected to MySQL [user: ${process.env.MYSQL_USER}, database: ${process.env.MYSQL_DATABASE}]`);
		console.log(results[0]);
		return true;
	}
	catch(err) {
		console.log("Error getting version from MySQL");
        console.log(err);
		return false;
	}
}


  

module.exports = {printMySQLVersion};