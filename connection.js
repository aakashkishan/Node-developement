var http = require('http');
http.createServer(function(req,res) {
	if(req.method == 'POST') {
		req.on('data',function(data) {
			var json = decodeURIComponent(data.toString().replace('=',''));
			json = JSON.parse(json);
			
			var mysql = require("mysql"); 
			var con = mysql.createConnection({
				host: "localhost",
				user: "root",
				password: "palmwebos321"
			});
			con.connect(function(err){
				if(err){
					console.log('Error connecting to Db');
					return;
				}
				console.log('Connection established');
			});			
			var query="select * from renaissance.users where (email='"+json.email+"')&(token='"+json.token+"');";
			con.query(query,function(err,rows) {
				if(rows.length==0) {
					console.log(rows);
					res.write('<h5>Invalid Request</h5>');
					res.end();
				} else {   
					
				}
			}); 
		});
	}
}).listen(303);