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


// ~ Official Solution ~
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//  for (var i = 0; i < 3; i++)
//    console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)

// ~ Comments ~
// * This is the first solution not similar to mine. I should consider making
//   my solutions scalable. DRY it up.
// * Why not print the results at the end of each iteration instead of creating
//   a separate function to print them all at once. The requirements only
//   indicated that ehty needed to be print in the same order as the args.
// * Error handling!
