var express = require('express');
var app = express();

var yatriRoute = require('./yatri.js');


app.get('/student', (req, res) => {
    res.send('Hello Student');
}).use('/student', yatriRoute);
app.get('/proffessor', (req, res) => {
    res.send('Hello Professor');
}).use('/proffessor', yatriRoute);
app.get('/employee', (req, res) => {
    res.send('Hello Employee');
}).use('/employee', yatriRoute);



app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/');
});