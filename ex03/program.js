var fs = require('fs'),
    file = process.argv[2],
    buffer = fs.readFileSync(file),
    split_file = buffer.toString().split('\n');

console.log(split_file.length - 1);


// ~ Official Solution ~
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
//
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// ~ Comments ~
// * I'm noticing that require is exactly like `import` in Python.
// * I should have put the `- 1` at the end of the `split_file` variable.
// * The 'utf-8' tip is nice, I'll make sure to use it moving forward.
