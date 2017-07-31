var fs = require('fs');
var chalk = require('chalk');
var log = console.log;

process.stdout.write(chalk.yellow('prompt > '));
var obj = {
    pwd: function(){
      process.stdin.on('data', function (data) {
      var cmd = data.toString().trim().split(' '); // remove the newline
      if(cmd[0] == "pwd") {
        process.stdout.write(chalk.blue(process.cwd()));
      } else if(cmd[0] == "date") {
        process.stdout.write(chalk.cyan((new Date()).toString()));      
      } else if(cmd[0] == "ls") {
        process.stdout.write(chalk.red(fs.readdirSync('.').toString().replace(/,/g , " ")));
      } else if(cmd[0] == "echo") {
        if(cmd[1][0] == "$"){
          process.stdout.write(chalk.magenta(process.env[cmd[1].slice(1)]));
        }
        else process.stdout.write(cmd.slice(1).toString().replace(/,/g , " "));
      } else {
        process.stdout.write('You typed: ' + cmd);
      }
        process.stdout.write(chalk.yellow('\nprompt > '));
      });
    }
}

module.exports=obj