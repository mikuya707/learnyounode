var fs = require('fs');
var count;
fs.readFile(process.argv[2], 'utf8', function(err, data){
	count = data.split('\n').length - 1 
	console.log(count);
});

/** Official Solution:
    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/