var ff = require('./file_filter');

var path = process.argv[2],
    ext = process.argv[3];

ff.filterByExt(path, ext, function (err, data) {
  if (err) console.error(err);
  data.forEach(function (file) {
    console.log(file);
  });
});

