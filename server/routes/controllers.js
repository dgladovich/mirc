const express = require('express');
const router = express.Router();
const supdb = require('../sup_db/models');
const {Controller} = supdb;
/* GET users listing. */

router.get('/', function (req, res, next) {
    Controller
        .findAll()
        .then((controllers) => {
            res.json(controllers);
        })
        .catch((e)=>{
            console.error(e)
            res.send(e);
        })
});

module.exports = router;
