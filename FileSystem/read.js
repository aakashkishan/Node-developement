var fs = require("fs");

// Synchoronous reading of file
var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");

console.log(contents);

// Asynchoronous reading of file
fs.readFile("./lib/sayings.md", "UTF-8", function( err, saying) {

	if (err) {
		throw err;
	}

	console.log(saying);

});