var http = require('http');

http.get(process.argv[2],  function (response) {
  response.setEncoding('utf-8');
  response.on('data', function (data) {
    console.log(data);
  });
}).on('error', function (e) {
  console.log("Got error: " + e.message);
});


// ~ Official Solution ~
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

// ~ Comments ~
// * Docs used example with `.on` how I did it. I prefer the
//   the style in the official solution.

