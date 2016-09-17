var questions = [
	"What is your name?",
	"What is your age?",
	"What is your fav hobby?" 
];

var answers = [];

function ask(i) {

	process.stdout.write(`\n ${questions[i]} `);
	process.stdout.write("   >   ");
}

process.stdin.on('data', function(data) {
	answers.push(data.toString().trim());

	if(answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

process.on('exit', function() {
	for(var j = 0; j < answers.length; j++) {
			process.stdout.write(` ${answers[j]} \t`)
		}
})

ask(0);
