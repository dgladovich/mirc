const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Support chart works fine')
});
router.use('/controllers', controllers)

module.exports = router;
