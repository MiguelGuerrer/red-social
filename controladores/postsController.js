//requires
const db = require("../database/models")

//metodos
const postsController = {
  agregarPost: function(req, res) {
      res.render('agregarPost');
    },
    detallePost: function(req, res) {
      let post = db.Posteo.find(post=>post.id==req.params.id)
      res.render('detallePost',{post:post});
    }
}
  
  //exportaciones
  
  module.exports = postsController;