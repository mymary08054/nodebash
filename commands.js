var fs = require('fs');

var obj = {
    pwd: function(){
      process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline

      if(cmd == "pwd") {
        process.stdout.write(process.cwd());
      } else if(cmd == "date") {
        process.stdout.write((new Date()).toString());      
      } else if(cmd == "ls") {
        process.stdout.write(fs.readdirSync('.').toString().replace(/,/g , " "));
      } else {
        process.stdout.write('You typed: ' + cmd);
      }
        process.stdout.write('\nprompt > ');
      });
    }
}

module.exports=obj