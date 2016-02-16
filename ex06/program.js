var ff = require('./file_filter');

var path = process.argv[2],
    ext = process.argv[3];

ff.filterByExt(path, ext, function (err, data) {
  if (err) console.error(err);
  data.forEach(function (file) {
    console.log(file);
  });
});


// ~ Official Solution ~
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

// ~ Comments ~
// * Need to `return` console.error!
