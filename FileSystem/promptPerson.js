var readline = require('readline');
var rl = readline.createInterface( process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};

rl.question( "What is your name? \t", function(answer) {

	realPerson.name = answer;

	var person = realPerson.name + ".md";

	// TODO: Create a new Markdown File.
	// fs.writeFileSync( argument1, argument2);
	// argument1 = name of the file, argument2 = content to be written on file.
	fs.writeFileSync(person, `${realPerson.name}\n================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? \t`)
	rl.prompt();

	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

		// TODO: Append Sayings to the Markdown File.
		// We use function appendFile(argument1, argument2); To append Files to the markdown File that we have created.
		// argument1 = name of the file, argument2 = content to be append to file.
		fs.appendFile(person, `* ${saying.trim()} \n`);

		if(saying.toLowerCase().trim() === 'exit')	{

			rl.close();

		} else {

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


