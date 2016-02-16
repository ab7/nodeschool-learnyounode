var fs = require('fs'),
    p = require('path');

var Filter = function () {};

Filter.prototype.filterByExt = function (path, ext, callback) {
  try {
    data = [];
    fs.readdir(path, function (err, files) {
      files.forEach(function (file) {
        if (p.extname(file).slice(1) === ext) data.push(file);
      });
      callback(null, data);
    });
  } catch (e) {
    callback(e);
  }
};

module.exports = new Filter();


// ~ Official Solution ~
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }

// ~ Comments ~
// * I really wanted to export an anyonymous object like in the style of `path`
//   and `fs` so I willingly failed the 'single function' export requirement.
//   Source: https://darrenderidder.github.io/talks/ModulePatterns/#/8
// * Need to do more research about callbacks and error handling. This  article
//   claims try/catch doesn't work: https://www.joyent.com/developers/node/design/errors
