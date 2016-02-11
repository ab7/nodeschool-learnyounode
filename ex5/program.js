var fs = require('fs'),
    p = require('path');

var path = process.argv[2],
    ext = process.argv[3];

fs.readdir(path, function (err, files) {
  for (var i = 0; i < files.length; i++) {
    if (err) console.error(err);
    var file = files[i];
    var fileExt = p.extname(file).slice(1);
    if (fileExt === ext) console.log(file);
  }
});


// ~ Official Solution ~
// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

// ~ Comments ~
// * I don't see `forEach` that often. Interesting warning from MDN doc page:
//    > Note: There is no way to stop or break a forEach() loop other than by throwing
//    > an exception. If you need such behaviour, the .forEach() method is the wrong
//    > tool, use a plain loop instead.
