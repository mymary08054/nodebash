// Output a prompt

var commands = require('./commands');
var userCommand = 'pwd';

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim().split(' '); // remove the newline
    commands[cmd[0]]();
})


// The stdin 'data' event fires after a user types in a line
