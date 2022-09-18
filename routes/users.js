var express = require('express');
var router = express.Router();
let userController = require('../controladores/userController')

/* GET users listing. */
router.get('/login', userController.login);
router.get('/miPerfil', userController.miPerfil);
router.get('/registracion', userController.registracion);
router.get('/editarPerfil', userController.editarPerfil);
router.get('/detalleUsuario/:id', userController.detalleUsuario);
router.post('/registrarUsuario', userController.registrarUsuario);



module.exports = router;