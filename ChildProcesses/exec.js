var exec = require("child_process").exec;

exec("dir", function(err, stdout) {

	if(err) {
		throw err;
	}

	console.log("Directory Finished: ");
	console.log(stdout);
});