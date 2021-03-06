var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    req.pipe(map({wantStrings: true}, function (chunk) {
      return chunk.toUpperCase();
    })).pipe(res);
  }
});
server.listen(process.argv[2]);


// ~ Official Solution ~
// var http = require('http')
// var map = require('through2-map')
//
// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')
//
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))

// ~ Comments ~
// * No headers this time?
