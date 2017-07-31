var fs = require('fs');
var chalk = require('chalk');
process.stdout.write(chalk.yellow('prompt > '));

var done = function(output) {
  process.stdout.write(chalk.blue(output));
  process.stdout.write(chalk.yellow('\nprompt > '));
}

var commands = {
  done: function(output) {
  process.stdout.write(chalk.blue(output));
  process.stdout.write(chalk.yellow('\nprompt > '));
},
  ls: function() {
    var output = "";
    fs.readdir('.', function(err, files) {
      files.forEach(function(file) {
        output += file.toString() + "\n";
      })
      done(output);
    });
  },
  pwd: function() {
    var output = "";
    fs.readdir('.', function(err, files) {
      files.forEach(function(file) {
        output += file.toString() + "\n";
      })
      done(output);
    });
  }

}

var obj = {
    pwd: function(){
      process.stdin.on('data', function (data) {
      var cmd = data.toString().trim().split(' '); // remove the newline
      if(cmd[0] == "pwd") {
        process.stdout.write(chalk.blue(process.cwd()));
      } else if(cmd[0] == "date") {
        process.stdout.write(chalk.cyan((new Date()).toString()));      
      } else if(cmd[0] == "ls") {
        chalk.red(fs.readdir('.', function(err, file){
          if(err) throw err;
          process.stdout.write(file.toString().replace(/,/g , " "));
        }));
      } else if(cmd[0] == "echo") {
        if(cmd[1][0] == "$"){
          process.stdout.write(chalk.magenta(process.env[cmd[1].slice(1)]));
        }
        else process.stdout.write(cmd.slice(1).toString().replace(/,/g , " "));
      } else if(cmd[0] == "cat") {
        fs.readFile(cmd[1], 'utf8', function(err, file){
          if(err) throw err;
          console.log(file);
        })
      }  else if(cmd[0] == "head") {
        fs.readFile(cmd[1], 'utf8', function(err, file){
          if(err) throw err;
          var file_array = file.split('\n');
          for(var i = 0; i < 5; i++){
          console.log(file_array[i]);
          }
        })
      } else if(cmd[0] == "tail") {
        fs.readFile(cmd[1], 'utf8', function(err, file){
          if(err) throw err;
          var file_array = file.split('\n');
          for(var i = file_array.length-5; i < file_array.length; i++){
          console.log(file_array[i]);
          }
        })
      } 
      else {
        process.stdout.write('You typed: ' + cmd);
      }
        process.stdout.write(chalk.yellow('\nprompt > '));
      });
    }
}

module.exports=commands