


var express = require('express');
var router = express.Router();
var port = 3000;



//route for /about
router.get('/about', function(req, res) {
    res.send('This is the About Page');
});

router.get('/', function(req, res) {
    res.send('Hello User');
});

router.get("/api/home",(req,res)=>{
    res.send("Welcome to Home Page");
});

router.get('/:name', function(req, res) {
    var name = req.params.name;
    res.send('Hello ' + name);
});


module.exports = router;
   