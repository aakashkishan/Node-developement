var fs = require("fs");

try {
	// Synchronous Directory Rename 
	fs.renameSync("./assets/logs", "./logs");
}	catch (err)	{
	console.log(err);
}

// A Directory cannot be removed unless the directory is empty. 
// Hence we must first remove the files in the directory first.
// For that we need to first read the contents of the directory

fs.readdir("./logs").forEach( function(fileName) {

	// All files in the logs directory will be deleted.
	fs.unlink("./logs" + fileName);

})

fs.rmdir("./assets", function(err) {

	if (err) {
		console.log(err);
	}	else {
		console.log("Directory Removal Successful\n");
	}

});