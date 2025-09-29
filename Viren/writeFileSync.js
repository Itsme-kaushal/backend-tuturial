const fs = require('fs');

var file = 'customer.json'
var products = require('./product.json')
/*
function createFile() {
 fs.open(file,'w',(err) =>
 {
     console.log(err);
 });
}

function loadDataAsynch() /// copy the data from one file to another file
{
    fs.readFile(file, (err,data) => {
        console.log('reading async.....');
        console.log(data.toString());
        // adding the below code after running the main.js
        fs.writeFile('copy.json',data.toString(),(err)=>{
            if(err)
            console.log(err); 
            else
            console.log('written the data....');
        })
    });
    // till here
    console.log('finished reading asynch !!!!!');
}
loadDataAsynch()

*/
//--------------- writing data into file --------------//
function loadData()
{
    console.log('we are starting with loadData() method....');
    var products = fs.readFileSync('product.json', {encoding: 'utf8'}); // array of data comingfrom json file
    return JSON.parse(products.toString())
}

function writeData(name, city){
    console.log('we are starting with writeData() method....');
    var customers = loadData();  // array in which we are pulling the recrods from customer.json
    customers.push({
        "name": name,      // here we are pushing the inputs given by user into the exiting array
        "city": city
    });
    fs.writeFileSync(file,JSON.stringify(customers));
}

function readData()
{
    var Products = loadData();
    console.log(Products);
}
function writeProducts(name, price){
    console.log('we are starting with writeProducts() method....');
    var Products = loadData();  // array in which we are pulling the recrods from customer.json
    Products.push({
        "name": name,
        "price": price
    });
    fs.writeFileSync('product.json', JSON.stringify(Products));
}       

function writeProductsinBackup(){
    
    fs.writeFileSync('backup_product.json', JSON.stringify(products));
}

module.exports={
    load: loadData,
    writeCustomer: writeData,
    readCustomer: readData,
    writeProducts: writeProducts,
    writeProductsinBackup: writeProductsinBackup
}
   

