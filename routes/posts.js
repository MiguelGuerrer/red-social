var express = require('express');
var router = express.Router();
var postController = require ("../controladores/postsController")

/* GET home page. */
router.get('/agregarPost', postController.agregarPost);
router.get('/detallePost/:id', postController.detallePost);

module.exports = router;