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
