var express = require('express');
var router = express.Router();
var postController = require ("../controladores/postsController")

let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/posts'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});
/* GET home page. */
router.get('/agregarPost', postController.agregarPost);
router.get('/detallePost/:id', postController.detallePost);
router.post('/agregarPost',upload.single('imagen'), postController.crearPost);


module.exports = router;