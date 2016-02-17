var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(res);
});
server.listen(process.argv[2]);


// ~ Official Solution ~
// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))

// ~ Comments ~
// * Don't forget to return headers in the response. Looks like some
//   browsers will let you get away with no headers but its against the
//   spec: http://stackoverflow.com/a/13486091/3349157
