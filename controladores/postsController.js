//requires
const db = require("../database/models")

//metodos
const postsController = {
  agregarPost: function(req, res) {
      res.render('agregarPost');
    },
    detallePost: function(req, res) {
      db.Posteo.findOne({
        include: {
          all: true,
          nested: true
        },
        where: {id: req.params.id}
      })
      .then(post => {
        //res.send(post)
        res.render('detallePost',{post:post});
      })
      
    },
    crearPost: function(req, res) {
      db.Posteo.create({
        id_usuario:req.session.usuario.id,
        nombre_imagen:req.file.filename,
        texto_imagen:req.body.post
      })
      .then(()=>{
        res.redirect('/')
      })
    }

}
  
  //exportaciones
  
  module.exports = postsController;
