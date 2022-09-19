//requires
const index = require("../db/index")

//metodos
const userController = {
    detalleUsuario: function(req, res) {
        res.render('detalleUsuario');
      },

      editarPerfil: function(req, res) {
        res.render('editarPerfil');
      },
        
      login: function(req, res) {
        res.render('login');
      },

      miPerfil: function(req, res) {
        res.render('miPerfil');
      },

      registracion: function(req, res) {
        res.render('registracion');
      },
      
      registrarUsuario: function(req, res) {
        res.redirect('/')
      },
}

//exportaciones

module.exports = userController;