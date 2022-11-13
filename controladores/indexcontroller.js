//requires     funcion require() 

const db = require('../database/models')

//metodos

const indexController = {
  home: function(req, res) {
    db.Posteo.findAll({
      include:[{
        model:db.Usuario,
        as:'usuario'
      },
      {
        model:db.Usuario,
        as:'comentario',
        through:{
          attributes:['texto_comentario']
        },
        include: {
          model:db.Usuario
        }
        
      }]
    })
    .then((posteos)=>{
      res.send(posteos)
    })
      //res.render('index', {posteos: index.posteos});
    },
    busqueda: function(req, res) {
      res.render('resultadoBusqueda');
    },
}

//exportaciones ---  objeto nativo .propiedad y variable

module.exports = indexController;