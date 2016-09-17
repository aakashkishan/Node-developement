// We can also include EventEmitter this way.
/* var events = require('events');
	// EventEmitter is a constructor. 
var emitter = new events.EventEmitter(); */
var EventEmitter = require('events').EventEmitter;


EventEmitter.on( 'customEvent', function( message, status ) {

	if( status === 200 ) {
		console.log(`${status}: ${message}`);
	} else if( status === 400 ) {
		console.log(`${status}: Bad Request`);
	} else if( status === 404 ) {
		console.log(`${status}: Page not Found`);
	}
	
});

/* The first and second parameters of the callback functions are the 
second and third parameters of the emit function  */
EventEmitter.emit( 'customEvent', "HelloWorld!", 200);
 

