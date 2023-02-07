const path = require('path');



const seperator = path.sep;
console.log(seperator);

const joinedPath = path.join('/content','subfolder','test.txt');
console.log(joinedPath);

const absolutePath = path.resolve('content','subfolder','test.txt');
console.log(absolutePath);

console.log(path.basename(absolutePath))