var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/Thomas_Jefferson",
	mwthod: "GET"
};

var req = https.request(options, function(res) {

	var responseBody = "";

	console.log("The Server has started reading\n");
	console.log(`Status Code: ${res.statusCode}\n`);
	console.log("The Header is: %j \n", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) {

		console.log(chunk);
	});

	res.on("data", function(chunk) {

		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;

	});

	res.on("end", function() {

		fs.writeFile("thomas_jefferson.html", responseBody, function(err) {

			if (err) {
				console.log(err);
			}

			console.log("File Downloaded");

		});

	});

});

req.on("error", function(err) {

	console.log(`There is a problem with ${err}`);

});

req.end();

