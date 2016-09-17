var fs = require("fs");

//Synchoronous Reading
var files = fs.readdirSync('./lib');

console.log(files);

console.log("Reading Files...");

//Asynchronous Reading
fs.readdir('./lib', function( err, files) {

	if(err) {
		throw err;
	}
		
	console.log(files);

});

console.log("Reading Files...");