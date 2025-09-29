//read file from backup_product.json file and delete after reading
const fs = require('fs');
const file = 'backup_product.json';
//--------------- reading data from file --------------//
fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
    if(err)
    console.log(err);
    else
    console.log('Data read from file :', data); 
    //deleting the file after reading
    // fs.unlink(file, (err) => {
    //     if(err)
    //     console.log(err);
    //     else
    //     console.log('written the data....');
    // });
});

fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
    if(err)
    console.log(err);
    else
    console.log('Data read from file :', data);
    //deleting the file after reading
    // fs.unlink(file, (err) => {
    //     if(err)
    //     console.log(err);
    //     else
    //     console.log('written the data....');
    // });
});

//async read file

console.log('Reading file asynchronously...');
fs.readFile('product.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Async File content:', data);
});
fs.unlink(file, (err) => {
    if(err)
    console.log(err);
    else
    console.log('written the data....');
});