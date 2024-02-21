
const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)  // displays the path upto the present directory
console.log(__filename) // displays the path upto the present file

console.log(path.dirname(__filename)) //displays the same value with console.log(__dirname)
console.log(path.basename(__filename)) //displays the name of the file with the extension e.g server.js
console.log(path.extname(__filename)) //displays the extension of the file e.g. .js

console.log(path.parse(__filename)) //displays every thing the last three lines of codes displays plus more as an object.
