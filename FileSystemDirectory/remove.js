var fs = require("fs");

// To see if the files we are about to remove exist or not.
if (fs.existsSync("./lib/config.json") && fs.existsSync("./notes.md")) {

	try {

		// We use the below statement to remove files / directories specified in the path.
		// Synchronous File Removal.
		fs.unlinkSync("./lib/config.json");

	} catch (err) {

		console.log(err);

	}

	// Asynchronous File Removal.
	fs.unlink("./notes.md", function(err) {

		if (err) {
			console.log(err);
		}	else 	{
			console.log("Notes.md File Removed\n")
		}

	});

}


