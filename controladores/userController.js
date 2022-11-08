//requires
const { request } = require("express");
const db = require("../database/models")
const bcrypt = require('bcryptjs');
const { localsName } = require("ejs");

//metodos
const userController = {
  detalleUsuario: function (req, res) {
    let usuario = db.Usuario.find(usuario => usuario.id == req.params.id)
    let posteos = db.Posteo.filter(post => post.id_usuario == usuario.id)

    res.render('detalleUsuario', { usuario, posteos });
  },

  editarPerfil: function (req, res) {

    res.render('editarPerfil');
  },

  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {
    let usuario = db.usuarios.find(usuario => usuario.id == req.params.id)
    let posteos = db.posteos.filter(post => post.id_usuario == usuario.id)
    res.render('miPerfil', { usuario, posteos });
  },

  registracion: function (req, res) {
    res.render('registracion');
  },

  registrarUsuario: function (req, res) {
    db.Usuario.create({
      email: req.body.email,
      contrasenia: bcrypt.hashSync(req.body.password,12),
      foto: req.file.filename,
      fecha: req.body.fecha,
      dni: req.body.dni
    })
    .then(()=>res.redirect('/users/login'))

  },

  signin: function (req, res) {
    if (req.body.password.length<3) {
      locals.errors = "la contrasenia debe tener al menos 3 caracteres"
      return res.render('login');

    }
  
  },
}


//exportaciones

module.exports = userController;