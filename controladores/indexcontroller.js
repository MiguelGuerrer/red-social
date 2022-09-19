//requires     funcion require() 

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

//exportaciones ---  objeto nativo .propiedad y variable

module.exports = indexController;