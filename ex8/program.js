var bl = require('bl'),
    http = require('http');

http.get(process.argv[2], function (resp) {
  resp.pipe(bl(function(err, data) {
    console.log(data.length);
    console.log(data.toString());
  }));
});

