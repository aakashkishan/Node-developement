var fs = require("fs");

if(fs.existsSync("FileSystemDirectory")) {

	console.log("Directory already Exists \n");

}	else	{

		fs.mkdir("FileSystemDirectory", function(err) {

			if (err) {
			console.log(err);
			}

			console.log(" Directory Created \n");

		})

}



