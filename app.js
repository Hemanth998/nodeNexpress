const {firstName,lastName} = require('./names');
const sayHelloWorld = require('./HelloWorld');

require('./sum');

console.log("Hello from node");

sayHelloWorld(firstName,lastName);