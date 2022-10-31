//requires
const index = require("../database/")

const posteos = db.index;
const comentarios = db.index;

//metodos
const postsController = {
  agregarPost: function(req, res) {
      res.render('agregarPost');
    },
    detallePost: function(req, res) {
      let post = index.posteos.find(post=>post.id==req.params.id)
      res.render('detallePost',{post:post});
    }
}
  
  //exportaciones
  
  module.exports = postsController;