var fs = require("fs");
 var md = `

 Sample Markdown Title
 =====================

 Sample Markdown Sub-Title
 -------------------------

 * point1
 * point2
 * point3

 `;

// Asynchoronous Write / Create a File.
 fs.writeFile("sample.md", md.trim(), function(err) {

	if (err) {
		throw err
	}

	console.log("File Created");

 });

// Asynchoronous Read from a File.
 fs.readFile("sample.md", "UTF-8", function(err, contents) {

 	if (err) {
 		throw err;
 	}

 	console.log(`${contents} \n `);

 });