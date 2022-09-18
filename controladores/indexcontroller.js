//requires

const index = require('../db/index')

//metodos

const indexController = {
  home: function(req, res) {
      res.render('index', {posteos: index.posteos});
    },
    busqueda: function(req, res) {
      res.render('resultadoBusqueda');
    },
}

//exportaciones

module.exports = indexController;