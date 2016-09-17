var readline = require('readline');
var rl = readline.createInterface( process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};

rl.question( "What is your name? \t", function(answer) {

	realPerson.name = answer;

	var stream = fs.createWriteStream(realPerson.name + ".md");

	// TODO: Create a new Markdown File.
	// sream.write("content"); is used to write as a stream.
	// argument1 = name of the file, argument2 = content to be written on file.
	stream.write(`${realPerson.name}\n================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? \t`)
	rl.prompt();

	rl.on('line', function(saying) {

		if(saying.toLowerCase().trim() === 'exit')	{

			// TODO: Close the Stream.
			stream.close();

			rl.close();

		} else {

			realPerson.sayings.push(saying.trim());

			// TODO: Append Sayings to the Markdown File.
			// We use function stream.write("content"); To append Files to the markdown File that we have created.
			stream.write(`* ${saying.trim()} \n`);

			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) \t`);
			rl.prompt();

		}			
	});
		
	rl.on('close', function() {
		
		fs.readFile(person, "UTF-8", function(err, contents) {

			if (err) {
				throw err;
			}

			console.log(`\n ${contents} \n Finished Reading File.`);

		}); 

		// %s is for string type and %j is for json type. 
		console.log("%s is a real person who said %j", realPerson.name, realPerson.sayings);
		process.exit();  

	});

});


