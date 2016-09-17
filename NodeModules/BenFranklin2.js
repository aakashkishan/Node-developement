var Person = require("./lib/person"); 

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on('speak', function(said) {

	console.log(`${this.name} -> ${said}`);
	
});

ben.on('speak', function(said) {

	console.log(`${this.name} : ${said}`);

});

ben.emit('speak', "You may delay, But time will not." );
george.emit('speak', "It is far better to be alone, than to be in bad company.");

