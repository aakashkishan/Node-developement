var fs = require("fs");

// To rename the file project_config.js to config.json. 
// Synchronous File Rename.
fs.renameSync("./lib/project_config.js", "./lib/config.json");

console.log("project_config.js successfully rename to config.json");

// Asynchoronous File Rename.
fs.rename("./lib/notes.md", "./notes.md", function(err) {

	console.log("Notes.md File moved Successfully");

});

