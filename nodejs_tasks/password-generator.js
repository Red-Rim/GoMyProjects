const generate_password = require('generate-password');

const password = generate_password.generate({
  length: 10,     //pass length
  numbers: true,      //allow numbrs
  symbols: true      //allow symbols
});

console.log(password);