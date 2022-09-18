//requires


//metodos
const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
      },
      detallePost: function(req, res) {
        res.render('detallePost');
      },   
  }
  
  //exportaciones
  
  module.exports = postsController;