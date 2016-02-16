var params = process.argv;
var sum = 0;
for (var i = 2; i < params.length; i++) {
  sum += Number(params[i]);
}
console.log(sum);


// ~ Official Solution ~
// var result = 0
//
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
//
// console.log(result)

// ~ Comments ~
// * Just noticed the absence of semi-colons. Found a style-guide that I'll try and follow:
//   https://github.com/felixge/node-style-guide#use-semicolons.
// * Should have stored `process.argv` in a variable.
