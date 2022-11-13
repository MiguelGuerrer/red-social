var express = require('express');
var router = express.Router();
const indexController = require ('../controladores/indexcontroller')
const db = require('../database/models')
/* GET home page. */
router.get('/', indexController.home);
router.get('/busqueda', indexController.busqueda);

module.exports = router;