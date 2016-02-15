var bl = require('bl'),
    http = require('http');

http.get(process.argv[2], function (resp) {
  resp.pipe(bl(function(err, data) {
    console.log(data.toString());
  }));
  http.get(process.argv[3], function (resp) {
    resp.pipe(bl(function(err, data) {
      console.log(data.toString());
    }));
    http.get(process.argv[4], function (resp) {
      resp.pipe(bl(function(err, data) {
        console.log(data.toString());
      }));
    });
  });
});

