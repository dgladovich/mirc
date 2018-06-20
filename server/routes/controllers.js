const express = require('express');
const router = express.Router();
const smart_db = require('../smart_db/models');
const {Controller} = smart_db;

/*
const controllers = [{id: 1, name: 'filter'}, {id: 2, name: 'noria'}, {id:3, name: 'chain'}]
*/
/* GET users listing. */
router.get('/', function (req, res, next) {
    Controller.findAll()
        .then(cs => {
            let controllers = cs.map(c => c.toJSON());
            res.json(controllers)
        })
        .catch(e => console.error);
});

module.exports = router;
