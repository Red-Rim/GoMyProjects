const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');  //write to file
const data = fs.readFileSync('welcome.txt', 'utf8');  //read the file
console.log(data);   //log content
