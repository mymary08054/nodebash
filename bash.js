// Output a prompt

var commands = require('./commands');
var userCommand = 'pwd';
commands[userCommand]();

// The stdin 'data' event fires after a user types in a line
