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

