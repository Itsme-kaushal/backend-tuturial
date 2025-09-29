var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('   Welcome to Yatri Profile Page');
});


router.get('/stud/:username', (req, res) => {
    const username = req.params.username;
    if (username ==='daniel') {
        res.send('Hello Daniel');
    } else {
        res.send('User not found');
    }
});

router.post('/prof/:username', (req, res) => {
    const username = req.params.username;   
    res.send('welcome to this page ' + username);
});

router.post('/emp', (req, res) => {
    res.send('Hey you are new Employee');
});
module.exports = router;
