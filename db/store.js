// Need util and fs
const fs = require('fs');
const util = require('util');

// random id generator
const uuidv1 = require('uuid/v1');

// writeToFile/get
// readToFile/ read and append
// delete
fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Synchronously:
const fs = require('fs');

fs.appendFileSync('message.txt', 'data to append');

module.exports = new Store();