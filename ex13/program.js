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


// ~ Official Solution ~
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))

// ~ Comments ~
// * Need to remember to abstract the request processing into separate methods.
// * Much cleaner to have a both functions point to result and have one
//   handler for the response.
// * The regex method `.test` is new to me, very useful.
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
