var waitTime = 5000; //5 seconds 
var waitInterval = 10;
var currentTime = 0;
var percentWaited = 0;	

function writeWaitingTime(p) {
	process.stdout.clearLine(); //clears a line in the command prompt
	process.stdout.cursorTo(0); //set Cursor to the starting position of the line
	if( p != 100) {
		process.stdout.write(`waiting ${p}%`);
	} else {
		process.stdout.write(`waited ${p}%`);
	}
}

var interval = setInterval( function() {
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime / waitTime) * 100);
	writeWaitingTime(percentWaited);
}, waitInterval);

setTimeout( function() {
	clearInterval(interval);
	writeWaitingTime(100);
	console.log("Do You Bleed?");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingTime(percentWaited);