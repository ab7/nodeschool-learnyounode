var bl = require('bl'),
    http = require('http');

http.get(process.argv[2], function (resp) {
  resp.pipe(bl(function(err, data) {
    console.log(data.length);
    console.log(data.toString());
  }));
});


// ~ Official Solution ~
// var http = require('http')  
// var bl = require('bl')  
//   
// http.get(process.argv[2], function (response) {  
//   response.pipe(bl(function (err, data) {  
//     if (err)  
//       return console.error(err)  
//     data = data.toString()  
//     console.log(data.length)  
//     console.log(data)  
//   }))    
// })

// ~ Comments ~
// * Need to remember to add error handling.

