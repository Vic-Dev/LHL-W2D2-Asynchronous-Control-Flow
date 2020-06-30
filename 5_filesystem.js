const fs = require('fs');

console.log('Before');

fs.readFile('./2_blocking.js', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('I have an error', err);
  }

  console.log('I have data', data);

  console.log('Type is: ', typeof data);
});

console.log('After');
