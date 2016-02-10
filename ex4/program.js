var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'utf-8', function(err, data) {
  if (err) return console.error(err);
  console.log(data.split('\n').length - 1);
});


// ~ Official Solution ~
// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

// ~ Comments ~
// * Solution didn't include error handling but it seems like general practice so I'll keep using it.
// * Declaring the `lines` variable was more explicit.
