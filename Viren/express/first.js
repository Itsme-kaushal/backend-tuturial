var express = require('express');
var app = express();
var port = 3000;

app.use('/cartify', require('./cartify.js'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});