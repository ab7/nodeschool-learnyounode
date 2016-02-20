var http = require('http');
var url = require('url');

function declined(res) {
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("404 Not Found\n");  // per http://stackoverflow.com/a/20933622/3349157
}

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    parsedUrl = url.parse(req.url)
    if (parsedUrl.pathname.substring('api')) {
      res.writeHead(200, {'content-type': 'application/json'});
      var iso = new Date(parsedUrl.query.split('=')[1]);
      if (parsedUrl.pathname === '/api/parsetime') {
        res.end(JSON.stringify({
          "hour": iso.getHours(),
          "minute": iso.getMinutes(),
          "second": iso.getSeconds()
        }));
      } else if (parsedUrl.pathname === '/api/unixtime') {
        res.end(JSON.stringify({"unixtime": iso.getTime()}));
      } else {
        res.end('Please enter a valid endpoint');
      }
    } else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");  // per http://stackoverflow.com/a/20933622/3349157
    }
  }
});
server.listen(process.argv[2]);
