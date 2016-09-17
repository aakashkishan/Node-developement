var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function(err, files) {

	/* FileName is stored in the form of arrays 
		and it will be returned to the call back function. */
	files.forEach( function(filename) {

		var file = path.join(__dirname, "lib", filename);
		var stats = fs.statSync(file);

		if ( stats.isFile() ) {

			fs.readFile(file, "UTF-8", function(err, contents) {

				if (err) {
					throw err;
				}

				console.log(`${path.basename(file)}: \n \n ${contents} \n`);

			});

		}

	});

});