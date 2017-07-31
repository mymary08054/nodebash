var fs = require('fs');

var obj = {
    pwd: function(){
      process.stdin.on('data', function (data) {
      var cmd = data.toString().trim().split(' '); // remove the newline
      if(cmd[0] == "pwd") {
        process.stdout.write(process.cwd());
      } else if(cmd[0] == "date") {
        process.stdout.write((new Date()).toString());      
      } else if(cmd[0] == "ls") {
        process.stdout.write(fs.readdirSync('.').toString().replace(/,/g , " "));
      } else if(cmd[0] == "echo") {
        if(cmd[1] == "$PATH"){
          process.stdout.write(process.env.PATH);
        }
        else process.stdout.write(cmd.slice(1).toString().replace(/,/g , " "));
      } else {
        process.stdout.write('You typed: ' + cmd);
      }
        process.stdout.write('\nprompt > ');
      });
    }
}

module.exports=obj