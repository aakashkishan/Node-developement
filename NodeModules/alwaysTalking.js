var sayings = [
	"You may delay, but time will not.",
	"Tell me and I forget, Teach me and I remember, Involve me and I learn.",
	"Early to bed and early to rise makes a man healthy, wealthy and wise.",
	"It takes many good deeds to build a good reputation, and only one bad one to lose it.",
	"An investment in knowledge pays the best interest.",
	"Well done is better than well said.",
	"By failing to prepare you are preparing to fail."
];

var interval = setInterval( function() {
	var i = Math.floor( Math.random() * sayings.length );
	process.stdout.write(`\t ${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
	console.log(`STDIN data received -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});




