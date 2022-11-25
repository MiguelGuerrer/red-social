//requires
const db = require("../database/models")
const bcrypt = require('bcryptjs');

//metodos
const userController = {
  detalleUsuario: function (req, res) {

    db.Usuario.findByPk(req.params.id, {
      include: {
        all: true,
        nested: true
      }
    })
      .then((usuariodb) => {
        res.render('detalleUsuario', { usuariodb: usuariodb });
      })

  },

  editarPerfil: function (req, res) {

    res.render('editarPerfil');
  },

  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {

    db.Usuario.findByPk(req.session.usuario.id, {
      include: {
        all: true,
        nested: true
      }
    })
      .then((usuariodb) => {
        //res.send(usuariodb)
        res.render('miPerfil', { usuariodb: usuariodb });
      })
   
  },

  registracion: function (req, res) {
    res.render('registracion');
  },

  registrarUsuario: function (req, res) {
    db.Usuario.create({
      email: req.body.email, // req.body.email = juanperez@gmail.com
      user: req.body.user, // req.body.user = jperez
      contrasenia: bcrypt.hashSync(req.body.password, 12), 
      foto: req.file.filename,
      fecha: req.body.fecha,
      dni: req.body.dni
    })
    .then(() => res.redirect('/users/login'))
    .catch(error => console.log(error))
  },

  signin: function (req, res) {
    if (req.body.password.length < 3) {
      res.locals.errors = "la contrasenia debe tener al menos 3 caracteres"
      return res.render('login');
    }
    db.Usuario.findOne({
      where: {
        email: req.body.email, 
      }
    })
    .then((usuario) => {
        if (usuario == null) {
          res.locals.errors = "email no existe"
          return res.render('login');
        }
        if (bcrypt.compareSync(req.body.password, usuario.contrasenia) == false) {
          res.locals.errors = "contraseña incorrecta"
          return res.render('login');
        }

        req.session.usuario = usuario
        res.cookie("userId", usuario.id, {
          maxAge: 10 * 60 * 1000 //10 min
        })
        res.redirect("/")
      })
  },

  logout: function(req, res) {
    req.session.destroy()
    res.clearCookie("userId");
    res.redirect('/users/login')
  }
}


//exportaciones

module.exports = userController;