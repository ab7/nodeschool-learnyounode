var fs = require('fs'),
    file = process.argv[2],
    buffer = fs.readFileSync(file),
    split_file = buffer.toString().split('\n');

console.log(split_file.length - 1);

