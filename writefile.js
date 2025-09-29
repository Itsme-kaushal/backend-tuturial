let data2 = 'Hello Node.js';
data1 = ' we are writing to a file';
const fs = require('fs');
fs.writeFile('output.txt', data2, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

fs.appendFile('output.txt', data1, (err) => {
    if (err) throw err;
    console.log('Data appended to file');
});

//read file
// fs.readFile('output.txt',  (err, data) => {
//     if (err) throw err;
//     console.log('File content:', data);
// });

//async read file
console.log('Reading file asynchronously...');
fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Async File content:', data);
});
console.log('Last line of code');
