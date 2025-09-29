var express = require('express');
const router = express.Router();
const route = require('./route.js');

router.use('/yatri/profile', route);

module.exports = router;