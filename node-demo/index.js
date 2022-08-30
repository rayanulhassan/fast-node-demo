const logger = require('./logger')
const fs = require('fs');

// console.log(logger.url)
// logger.log('hello world');

logger('hello world');
const files = fs.readdirSync('./'); // reads all files in the present working directory
console.log(files);

