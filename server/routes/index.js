const express = require('express');
const router = express.Router();
const users = require('./users');

/* GET home page. */
router.use('/', function (req, res, next) {
    res.send('Support chart works fine')
});

module.exports = router;
