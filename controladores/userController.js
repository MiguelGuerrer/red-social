//requires
const db = require("../database/models")

//metodos
const userController = {
    detalleUsuario: function(req, res) {
      let usuario = db.Usuario.find(usuario=>usuario.id==req.params.id)
      let posteos = db.Posteo.filter(post=>post.id_usuario==usuario.id)

        res.render('detalleUsuario',{usuario,posteos});
      },

      editarPerfil: function(req, res) {

        res.render('editarPerfil');
      },
        
      login: function(req, res) {
        res.render('login');
      },

      miPerfil: function(req, res) {
        let usuario = db.usuarios.find(usuario=>usuario.id==req.params.id)
        let posteos = db.posteos.filter(post=>post.id_usuario==usuario.id)
        res.render('miPerfil',{usuario,posteos});
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