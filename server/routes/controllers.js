const express = require('express');
const router = express.Router();
const {Controller} = require('../smart_db/models');

console.log(Controller)

const controllers = [{id: 1, name: 'filter'}, {id: 2, name: 'noria'}, {id:3, name: 'chain'}]
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(controllers)
});

module.exports = router;
