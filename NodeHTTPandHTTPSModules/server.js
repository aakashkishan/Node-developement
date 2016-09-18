var http = require("http");

// http.createServer(RequestObject, ResponseObject);
 // RequestObject will have all the request headers / user info, and the ResponseObject will be a blank object at the beginning.
var server = http.createServer( function(req, res) {

	// To initialize the ResponseObject.
	res.writeHead(200, {"Content-Type": "text/html"});

	// End the ResponseObject.
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
		`); 

});

// Specify the IP number and the Port number.
// server.listen(portNumber);
server.listen(3000);

console.log("Server listening to Port number 3000");

