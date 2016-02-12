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
